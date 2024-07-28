import React from "react";
import Transition from "../../components/transition/Transition";

import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./blog.css";

const Blog = () => {
  return (
    <div className="blog page">
      <div className="container">
        <div className="blog-hero">
          <h1>
            Journal <span>on design.</span>
          </h1>
        </div>

        <section className="blogs">
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Shadow & Light: Exploring Visual Depth in Design
                      </Link>
                    </h3>
                    <p>
                      <span>Coming soon..</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Minimalist Methods: The Art of Less is More
                      </Link>
                    </h3>
                    <p>
                      <span>Coming soon..</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        My Life Theory, Crafted: A Developer's Spectrum
                      </Link>
                    </h3>
                    <p>
                      <span>My Life</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Digital Narratives: Telling Stories Through Design
                      </Link>
                    </h3>
                    <p>
                      <span>Coming soon..</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        The Future of UI: Interactive Beyond Imagination
                      </Link>
                    </h3>
                    <p>
                      <span>coming soon..</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Eco Design Trends: Sustainability Meets Aesthetics
                      </Link>
                    </h3>
                    <p>
                      <span>Trends</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Shadow & Light: Exploring Visual Depth in Design
                      </Link>
                    </h3>
                    <p>
                      <span>Coming Soon..</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col"></div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Addy</h2>
            <p>
              <br />
              <span>
                For a CV, portfolio, or inquiries, please reach out to 
                <a href="mailto:muneneaddy@gmail.com" style={{ textDecorationLine: 'underline'}}>
                  muneneaddy@gmail.com
                </a>
              </span>
            </p>

            <br />
            <br />
            <p>
              <span>+254 711 911 416</span>
            </p>
            <p>
              <br />
              <span>Instagram • X</span>
            </p>
          </div>
        </section>
        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(Blog);
