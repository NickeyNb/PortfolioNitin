import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs';
import {GiGraduateCap} from 'react-icons/gi';
import {MdOutlineWorkHistory} from 'react-icons/md';


const About = () => {
    return (
        <div id="about">
            <h2>About Me</h2>
            <article>
                <p>
                    Hi! I am an undergrad at Graphic Era Hill University pursuing a Bachelor of Technology
                    majoring in Computer Science and Engineering. I am known for bringing about new inspiration and thoughtful ideas. 
                    I would describe myself as a passionate learner, who will always take ownership of difficult challanges whenever they occur, which is my strength.
                    Now my goal is to utilize everything i have learned and get experience across different industries.
                </p>
            </article>

            <div>
                {/* Academics */}
                <section>
                    
                    <h2>Academics <GiGraduateCap /></h2>
                    <div>
                        <h3>B-Tech <span> | Graphic Era Hill University </span>| 2020-24</h3>
                        <h4>(8.88 CGPA)</h4>
                        <h3>Intermediate <span> | Beersheba Sr. Sec. School </span>| 2019-20 </h3>
                        <h4>(83.8%)</h4>
                        <h3>High School <span>| Beersheba Sr. Sec. School </span>| 2017-18 </h3>
                        <h4>(81%)</h4>
                    </div>
                </section>

                {/* What I do */}
                <section>
                    <h2>What I do <MdOutlineWorkHistory /></h2>
                    <div>

                        <h4><BsArrowBarRight/> Building knowledge, skills and brainpower.</h4>
                        <h4><BsArrowBarRight/> Designing and developing new projects.</h4>
                        <h4><BsArrowBarRight/> Encountering new ideas and challanges.</h4>
                        <h4><BsArrowBarRight/> Exploring subjects in greater depth.</h4>
                        <h4><BsArrowBarRight/> Satisfying my curiosity.</h4>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
