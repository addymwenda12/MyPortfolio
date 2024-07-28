import React, { useEffect, useRef, useState } from "react";
import "./menu.css";

import { Link } from "react-router-dom";
import { gsap } from "gsap";

import DefaultPreviewImg from "../../assets/images/menu/default.jpg";
import LinkPreviewImg1 from "../../assets/images/menu/link-1.png";
import LinkPreviewImg2 from "../../assets/images/menu/link-2.png";
import LinkPreviewImg3 from "../../assets/images/menu/link-3.jpg";
import LinkPreviewImg4 from "../../assets/images/menu/link-4.jpg";

const Menu = () => {
  const menuLinks = [
    { path: "/about", label: "About" },
    { path: "/works", label: "Work" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const menuContainer = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef();
  const menuLinksAnimation = useRef();
  const revealHoveredLinkImg = useRef();

  const toggleMenu = () => {
    document.querySelector(".hamburger-icon").classList.toggle("active");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      document.querySelector(".hamburger-icon").classList.toggle("active");
      setIsMenuOpen(false);
    } else return;
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 125 });

    menuAnimation.current = gsap.timeline({ paused: true }).to(".menu", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });

    menuLinksAnimation.current = gsap
      .timeline({ paused: true })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1.25,
        stagger: 0.075,
        ease: "power3.inOut",
        delay: 0.125,
      });

    revealHoveredLinkImg.current = gsap
      .timeline({ paused: true })
      .to(".bind-new-img", {
        top: "0%",
        duration: 1,
        ease: "power.out",
      });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      menuAnimation.current.play();
      menuLinksAnimation.current.play();
    } else {
      menuAnimation.current.reverse();
      menuLinksAnimation.current.reverse();
    }
  }, [isMenuOpen]);

  // handle link hover animation
  useEffect(() => {
    const previewContainer = document.querySelector(".link-preview-img");
    const menuLinkItems = document.querySelectorAll(".menu-link-item");
    const linkImages = [
      LinkPreviewImg1,
      LinkPreviewImg2,
      LinkPreviewImg3,
      LinkPreviewImg4,
    ];

    let lastHoveredIndex = null;

    const handleMouseOver = (index) => {
      if (index !== lastHoveredIndex) {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("bind-new-img");
        const img = document.createElement("img");
        img.src = linkImages[index];
        img.alt = "";
        imgContainer.appendChild(img);
        previewContainer.appendChild(imgContainer);

        gsap.to(imgContainer, {
          top: "0%",
          left: "0%",
          rotate: 0,
          duration: 1.25,
          ease: "power3.out",
          onComplete: () => {
            gsap.delayedCall(2, () => {
              const allImgContainers =
                previewContainer.querySelectorAll(".bind-new-img");

              if (allImgContainers.length > 1) {
                Array.from(allImgContainers)
                  .slice(0, -1)
                  .forEach((container) => {
                    setTimeout(() => {
                      container.remove();
                    }, 2000);
                  });
              }
            });
          },
        });

        lastHoveredIndex = index;
      }
    };

    menuLinkItems.forEach((item, index) => {
      item.addEventListener("mouseover", () => handleMouseOver(index));
    });

    return () => {
      menuLinkItems.forEach((item) => {
        item.removeEventListener("mouseover", () => handleMouseOver(index));
      });
    };
  }, []);

  return (
    <div className="menu-container" ref={menuContainer}>
      <div className="menu-bar">
        <div className="menu-logo" onClick={closeMenu}>
          <Link to="/">Addy Mutuiri</Link>
        </div>
        <div className="menu-actions">
          <div className="contact-btn">
            <div className="btn">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="menu-toggle">
            <button className="hamburger-icon" onClick={toggleMenu}></button>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="link-preview-img">
          <img src={DefaultPreviewImg} alt="" />

          <div className="bind-new-img">
            <img src={LinkPreviewImg1} alt="" />
          </div>
        </div>
        <div className="menu-col">
          <div className="menu-sub-col">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div
                  key={index}
                  className="menu-link-item"
                  onClick={toggleMenu}
                >
                  <div className="menu-link-item-holder">
                    <Link className="menu-link" to={link.path}>
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
