import React, { useRef, useEffect } from "react";
import "./works.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import { gsap } from "gsap";

import ProjectImg1 from "../../assets/images/projects/project-1.png";
import ProjectImg2 from "../../assets/images/projects/project-2.png";
import ProjectImg3 from "../../assets/images/projects/project-3.png";

const Works = () => {
  const workCopyReveal = useRef();

  useEffect(() => {
    workCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    workCopyReveal.current.play();
  }, []);

  const projectPreivewImages = [
    ProjectImg1,
    ProjectImg2,
    ProjectImg3,
  ];

  let lastHoveredIndex = null;
  const projectPreviewContainer = document.querySelector(".project-preview");

  const handleResetPreivew = () => {
    const projectPreviewContainer = document.querySelector(".project-preview");

    gsap.to(".project-preview img", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lastHoveredIndex = -1;
      },
    });
  };

  const handleMouseOver = (index) => {
    const projectPreviewContainer = document.querySelector(".project-preview");

    if (index !== lastHoveredIndex) {
      console.log(`Hovered ${index}`);

      const img = document.createElement("img");
      img.src = projectPreivewImages[index - 1];
      projectPreviewContainer.appendChild(img);

      gsap.to(img, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          const allPrevImages = projectPreviewContainer.querySelectorAll("img");

          if (allPrevImages.length > 1) {
            Array.from(allPrevImages)
              .slice(0, -1)
              .forEach((img) => {
                setTimeout(() => {
                  img.remove();
                }, 1000);
              });
          }
        },
      });

      lastHoveredIndex = index;
    }
  };

  useEffect(() => {
    const projectItems = document.querySelectorAll(".project-item");

    return () => {
      projectItems.forEach((projectItem) => {
        projectItem.removeEventListener("mouseover", () =>
          handleMouseOver(index)
        );
      });
    };
  }, []);

  return (
    <div className="works page">
      <div className="project-preview"></div>
      <div className="container">
        <section
          className="works-hero"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <div className="work-copy-wrapper">
            <h1>CASES</h1>
          </div>
          <div className="work-copy-wrapper">
            <h1>2023 • 2024</h1>
          </div>
        </section>

        <section className="project-list">
          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(1)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg1} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>MamaHub</h2>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>

          <div className="project-list-row">
            <div className="project-list-col whitespace-col"></div>
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(2)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg2} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-left">
                  <h2>Motile</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(3)}
              >
                <div className="project-img">
                  <Link to="/sample-project">
                    <img src={ProjectImg3} alt="" />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>Weather App</h2>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>
          </section>
        <div
          className="works-marquee"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <Marquee>
            <h1>
              My Projects
            </h1>
          </Marquee>
        </div>

        <div
          className="magnetic-btn"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <MagneticButton />
        </div>
      </div>
    </div>
  );
};

export default Transition(Works);
