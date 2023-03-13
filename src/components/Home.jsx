
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsChat , BsLinkedin, BsGithub, BsInstagram, BsChevronDoubleDown } from "react-icons/bs";
import me from "../assets/me.png";
import resume from "../assets/NitinResume.pdf";

const Home = () => {

  
 

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h2 {...animations.h1}>
            Hi, I Am 
          </motion.h2>
          <motion.h1 {...animations.h1}>
             Nitin Bisht
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Learner","A Developer", "A Designer"],
              autoStart: true,
              loop: true,
              // cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href={resume} rel="noreferrer" target="_blank">Resume</a>
            <a href="#contact">Connect <BsChat /></a>
          </div>

          <article>
            <BsGithub />
            <BsLinkedin />
            <BsInstagram />
            
          </article>

          
        </div>
      </section>
      <section>
        <img src={me} alt="Nitin Bisht Profile" />
      </section>
      <a href="#about">
        <BsChevronDoubleDown />
      </a>
    </div>
  );
};

export default Home;