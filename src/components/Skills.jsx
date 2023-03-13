
import React from "react";
import { motion } from "framer-motion";
import {TbCode, TbBrandReact, TbDatabase} from "react-icons/tb";
import {AiOutlineAntDesign} from "react-icons/ai";
import {SiMicrosoftsqlserver} from "react-icons/si";

const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="skillBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <TbCode />
          <h4>Programming</h4>
          <p>Years Experience</p>
        </motion.div>

        <motion.div
          className="skillBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiOutlineAntDesign />
          <h4>HTML CSS JAVASCRIPT</h4>
          <p>Years Experience</p>

        </motion.div>
        <motion.div
          className="skillBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <TbBrandReact />
          <h4>ReactJs</h4>
          <p>Years Experience</p>

        </motion.div>

        <motion.div
          className="skillBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiMicrosoftsqlserver />
          <h4>Framework</h4>
          <p>Years Experience</p>

        </motion.div>

        <motion.div
          className="skillBox5"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <TbDatabase />
          <h4>Database</h4>
          <p>Years Experience</p>

        </motion.div>
      </section>
    </div>
  );
};

export default Skills;