'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { text, curve, translate } from '../lib/anim';

const routes: { [key: string]: string } = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/projects": "Projects",
  "/skills": "Skills",
};

interface Dimensions {
  width: number | null;
  height: number | null;
}

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

interface CurveProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const Curve: React.FC<CurveProps> = ({ children, backgroundColor }) => {
  const router: any = useRouter();
  const [dimensions, setDimensions] = useState<Dimensions>({ width: null, height: null });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="curve" style={{ backgroundColor }}>
      <div style={{ opacity: dimensions.width === null ? 1 : 0 }} className="background" />
      <motion.p className="route" {...anim(text)}>
        {routes[router.route]}
      </motion.p>
      {dimensions.width !== null && <SVG height={dimensions.height!} width={dimensions.width!} />}
      {children}
    </div>
  );
};

interface SVGProps {
  height: number;
  width: number;
}

const SVG: React.FC<SVGProps> = ({ height, width }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default Curve;