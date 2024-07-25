'use client';

import React, { useEffect, useRef } from "react";
// import Curve from "@/components/curve";
import styled from "styled-components";
import { gsap } from "gsap";
import Head from "next/head";

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  color: #333;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  opacity: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  opacity: 0;
`;

const Button = styled.a`
  padding: 0.8rem 1.5rem;
  background-color: #ff652f;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e54e1b;
  }
`;

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    ).fromTo(buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <>
  <div style={{ backgroundColor: "#B0AD98" }}>
    <h1>Home</h1>
    <div className="body">
      <p>
        Welcome to my personal website. I am a software engineer based in Nairobi, Kenya. I am passionate about building software that solves real-world problems. I am also a tech enthusiast and I love learning new technologies.
      </p>
    </div>
  </div>
</>
  );
}