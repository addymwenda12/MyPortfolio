import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";

import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

import PortraitImg from "../../assets/images/home/portrait.jpg";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "What type of works do you take on?",
        content:
          "I specialize in full-stack development with a focus on crafting engaging and dynamic user experiences for websites and web applications. My work encompasses a range of projects, including developing mobile-responsive websites, building serverless workflows, and designing interactive user interfaces. I am passionate about leveraging my technical expertise to bring brands to life through immersive digital experiences. My experience spans across Tech and I have a proven track record of delivering impactful projects that boost user engagement.",
      },
      {
        title: "What is your background?",
        content:
          "I am a dedicated software engineer with a background in both full-stack development and artificial intelligence. As an ALX software engineering graduate, I have honed my skills in a variety of languages and frameworks, delivering impactful projects that enhance user engagement and efficiency. Currently, I am a Headstarter AI Fellow, where I am focused on developing cutting-edge AI projects. My experience spans across diverse industries, including Tech, Education, Entertainment, and eCommerce, allowing me to bring a unique perspective and technical expertise to every project I undertake.",
      },
      {
        title: "What is your best time for work?",
        content:
          "My best time for work is during the morning and early afternoon when I feel most alert and productive. I typically start my day early, which allows me to tackle complex tasks with a fresh perspective. However, I am flexible and can adjust my schedule to meet the needs of the team and project deadlines. I believe that effective communication and time management are key to maintaining productivity throughout the day, regardless of specific hours.",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>
              Enhancing Your Digital Presence with Memorable Web
              Animations.
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
            Addy Mutuiri is an accomplished Full-Stack Developer and Designer,
            based in the vibrant city of Nairobi. Specializing in creating
            engaging digital experiences. With a background as an ALX software
            engineerng graduate and currently serving as a Headstarter AI fellow.
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Est. 2024</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
                Addy Mutuiri collaborates with a diverse range of clients in Tech, Education, Entertainment, and eCommerce, developing robust full-stack solutions and dynamic web experiences for brands of all sizes. Specializing in front-end and back-end development, Addy brings a unique blend of creativity and technical precision to every project.
              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email: </span> <span>muneneaddy@gmail.com</span>
              </p>
              <p>
                <span>Phone: </span> <span>+254 711 911 416</span>
              </p>
              <p>
                <span>Address: </span>{" "}
                <span>115 Nairobi, Kenya</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>Honors and Awards</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2024</p>
              </div>
              <div className="award-view">
                <p>Best in Theme Project</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>DeKUT Awards</p>
              </div>
              <div className="award-project">
                <p>MamaHub</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards in-press">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>Education</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2023-2024</p>
              </div>
              <div className="award-view">
                <p>ALX SWE</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Software Engineering</p>
              </div>
              <div className="award-project">
                <p>Exploring the Full Stack Development</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2023-2027</p>
              </div>
              <div className="award-view">
                <p>Kenyatta University</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Mathematics & Computer Science</p>
              </div>
              <div className="award-project">
                <p>Applied Mathematics Techniques</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2019-2022</p>
              </div>
              <div className="award-view">
                <p>Machakos School</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>HighSchool Student</p>
              </div>
              <div className="award-project">
                <p></p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Addy</h2>
            <p>
              <span>
                For a CV, portfolio, or inquiries, please reach out to  
                <a href="mailto:muneneaddy@gmail.com" style={{ textDecoration: 'underline'}}>
                  muneneaddy@gmail.com
                </a>
              </span>
            </p>

            <br />
            <p>
              <span>+254 711 911 416</span>
            </p>
            <p>
              <span>Instagram • X</span>
            </p>
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
