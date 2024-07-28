import React, { useEffect, useRef } from "react";
import "./sample-project.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ProjectImg1 from "../../assets/images/projects/project-1.png";
import ProjectImg3 from "../../assets/images/projects/project-3.png";

const SampleProject = () => {
  const nextProjectPreview = useRef();
  const nextProjectPreviewBg = useRef();

  const handleNextProjectHover = () => {
    nextProjectPreview.current.play();
    nextProjectPreviewBg.current.play();
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const nextProjectContainer = document.querySelector(
      ".next-project-preview"
    );

    gsap.to(".next-project-preview", {
      x: clientX - nextProjectContainer.offsetWidth / 2,
      y: clientY - nextProjectContainer.offsetHeight / 2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleNextProjectHoverOut = () => {
    nextProjectPreview.current.reverse();
    nextProjectPreviewBg.current.reverse();
  };

  useEffect(() => {
    nextProjectPreview.current = gsap
      .timeline({ paused: true })
      .to(".next-project-preview", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      });

    nextProjectPreviewBg.current = gsap
      .timeline({ paused: true })
      .to(".nextProjectPreviewBg", {
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div className="project page">
      <section className="project-hero">
        <img src={ProjectImg1} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={ProjectImg3} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>MamaHub</h1>
          <p>Full Stack • Website</p>
        </section>

        <section className="project-brief">
          <h2>
            Innovative Digital Transformation for MamaHub.
            A comprehensive Platform Supporting Maternal Health and Education,
            connecting Mothers with Expert Advice and Community Resources.
          </h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Year</span>
                </p>
                <p>2024</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Credits</span>
                </p>
                <p>Partner: Raphael Kaira</p>
                <br />
                <p>Hackathon: DeKUT Hacks</p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Goals</span>
              </p>
              <p>
                The MamaHub project aims to revolutionize maternal support through a
                comprehensive digital platform, aligning with our mission to enhance
                maternal health and education. Our objectives are to create an engaging
                and supportive online space that connects mothers with expert advce and
                valuable resources. We focus on developing a user-friendly, informative
                website that offers a robust resource library and discussion forums,
                addressing critical needs in maternal support. Through innovative digital
                transformation, strategic design, and a seamless user experience, we aim to
                position MamaHub as a leading platform in maternal health, driving awerness,
                and fostering a strong community of support and advocacy. You can access to
                MamaHub page via: <a href="https://frontend-black-rho.vercel.app/" target="_blank"
                rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'grey'}}>MamaHub</a>
              </p>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-preview">
            <img src={ProjectImg3} alt="" />
          </div>
          <div className="next-project-copy">
            <p>
              <span>Next Project</span>
            </p>
            <h1
              onMouseOver={() => {
                handleNextProjectHover();
                document.addEventListener("mousemove", handleMouseMove);
              }}
              onMouseOut={() => {
                handleNextProjectHoverOut();
                document.removeEventListener("mousemove", handleMouseMove);
              }}
            >
              <Link to="/">Weather App</Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(SampleProject);
