import React from "react";
import Transition from "../../components/transition/Transition";

import MyPicture from "../../assets/images/projects/portrait2.jpg";
import { MetaLogo, XLogo } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./sample-blog.css";

function SampleBlog() {
  return (
    <div className="sample-blog page">
      <div className="container">
        <div className="s-blog-hero">
          <h2>My Life Theory, Crafted: A Developer's Spectrum</h2>
        </div>

        <div className="blog-content">
          <div className="s-blog-col scroll">
            <p>
              <span>Exhibitions • July 28, 2024</span>
            </p>

            <br />
            <h4>
              Beyond theory, from a dreamer to  a software engineer.
              <br />
              <br />
              Dreams do come true....
            </h4>
            <br />
            <br />
            <p>
              From a young age, I harbored a passion for technology, dreaming of becoming a software engineer. This aspiration took root in high school, where I excelled in computer science, earning an A in my national examinations. Determined to turn my dream into reality, I joined the ALX Software Engineering program, where I immersed myself in the world of coding. I started with C and Python, progressing to JavaScript frameworks like Node.js and Express.js, and developed a deep affinity for databases, particularly PostgreSQL.
            </p>
            <br />
            <br />
            <h3>
              My Passion
            </h3>
            <p>
              Eager to expand my skill set, I taught myself frontend development, beginning with the basics and advancing to frameworks like Angular. Currently, I am diving into Next.js to further enhance my frontend expertise. My educational journey continued at Kenyatta University, where I am pursuing a Bachelor of Science in Mathematics and Computer Science, with an anticipated graduation in July 2027.
            </p>
            <br />
            <br />
            <p>
              My ambition is to leverage my skills in both established tech companies and innovative startups, contributing to groundbreaking projects and making a significant impact in the tech industry. My journey has been fueled by a relentless curiosity and a commitment to continuous learning, driving me to explore new technologies and methodologies. This passion for tech and dedication to excellence underpin my pursuit of a career that not only fulfills my dreams but also allows me to create meaningful and transformative digital experiences.
            </p>
            <br />
            <br />
            <p>
              Beyond software development, I am deeply passionate about artificial intelligence. The potential of AI to revolutionize industries and improve lives fascinates me. I have been dedicating time to learning about machine learning algorithms, neural networks, and natural language processing. As a Headstarter AI Fellow, I have been working on innovative AI projects that challenge my problem-solving skills and expand my understanding of this cutting-edge field. My goal is to integrate AI into my software development projects, creating intelligent systems that enhance user experiences and solve complex problems.
            </p>
            <br />
            <br />
            <p>
              In addition to my technical pursuits, I believe in the power of collaboration and community. Throughout my journey, I have worked with diverse teams, learning the importance of effective communication and teamwork. These experiences have shaped me into a versatile developer, capable of adapting to different roles and environments. I am excited about the future and the endless possibilities that technology offers. With a strong foundation in software development and a growing expertise in artificial intelligence, I am poised to make significant contributions to the tech industry.
            </p>
            <br />
            <br />
          </div>
          <div className="s-blog-col sticky">
            <p id="blog-share">
              <span>Share</span>{" "}
              <div className="share-icon">
                <MetaLogo size={18} weight="light" color="#fff" />
              </div>
              <div className="share-icon">
                <XLogo size={18} weight="light" color="#fff" />
              </div>
            </p>

            <div className="blog-content-img">
              <img src={MyPicture} alt="" />
            </div>
          </div>
        </div>

        <MagneticButton />
      </div>
    </div>
  );
}

export default Transition(SampleBlog);
