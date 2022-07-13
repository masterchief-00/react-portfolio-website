import React from "react";
import "./about.css";
import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { RiFolderChartFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about-me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expereince</h5>
              <small>3+ years of work experience</small>
            </article>

            <article className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>

            <article className="about__card">
              <RiFolderChartFill className="about__icon" />
              <h5>Projects</h5>
              <small>200+ projects completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            ipsum optio ducimus vitae itaque laudantium inventore velit illo
            voluptas consequuntur, quae aperiam blanditiis. Obcaecati minima
            maiores maxime quis excepturi doloremque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
