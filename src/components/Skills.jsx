
import React from "react";
import { motion } from "framer-motion";
import { TbCode, TbBrandReact, TbDatabase } from "react-icons/tb";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiMicrosoftsqlserver } from "react-icons/si";


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
        <motion.a href="https://leetcode.com/nitinnb31122002/" rel="noreferrer" target="_blank" className="skillBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
          transition={{
            delay: 0.2,
          }}
        >
          <div>
            <TbCode />
            <h4>Programming</h4>
            <p>Proficient in C++ <br />Data Structure and Algorithm </p>
          </div>
        </motion.a>

        <motion.a className="skillBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.35,
          }}
        >
          <div>
            <AiOutlineAntDesign />
            <h4>HTML CSS JAVASCRIPT</h4>

          </div>
        </motion.a>

        <motion.a className="skillBox3" 
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <div>
            <TbBrandReact />
            <h4>ReactJs</h4>

          </div>
        </motion.a>

        <motion.a href="https://nickeynb.github.io/WeatherApp/" rel="noreferrer" target="_blank" className="skillBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
          transition={{
            delay: 0.3,
          }}
        >
          <div>
            <SiMicrosoftsqlserver />
            <h4>Framework</h4>

          </div>
        </motion.a>

        <motion.a href="#contact" className="skillBox5"
          whileInView={animations.whileInView}
          initial={animations.four}
          transition={{
            delay: 0.4,
          }}
        >
          <div>
            <TbDatabase />
            <h4>Database</h4>
            <p>MySql (Proficient) <br /> MongoDb (Proficient) </p>

          </div>
        </motion.a>
      </section>
    </div>
  );
};

export default Skills;