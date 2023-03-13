import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs';

const About = () => {
    return (
        <div id="about">
            <h2>About Me</h2>
            <article>
                <p>
                    Hi! I am an undergrad at Graphic Era Hill University pursuing a Bachelor of Technology
                    majoring in Computer Science and Engineering. I am known for bringing about new inspiration and thought-provoking ideas. My diverse
                    background has served me well in cultivating technical analysis and programming strengths.
                    I perform best in a work culture that promotes high-energy teamwork balanced with positivity and collaboration. I am confident that my creative talents will prove to be an invaluable addition to your organization.
                </p>
            </article>

            <div>
                {/* Academics */}
                <section>
                    <h2>Academics</h2>
                    <div>
                        <h3>B-Tech <span> | Graphic Era Hill University </span>| 2020-24</h3>
                        <h4>(9.00 CGPA)</h4>
                        <h3>Intermediate <span> | Beersheba Sr. Sec. School | 2019-20 </span></h3>
                        <h4>(83.8%)</h4>
                        <h3>High School <span>| Beersheba Sr. Sec. School | 2017-18 </span></h3>
                        <h4>(81%)</h4>
                    </div>
                </section>

                {/* What I do */}
                <section>
                    <h2>What I do ?</h2>
                    <div>

                        <h4><BsArrowBarRight/> Learning more about myself.</h4>
                        <h4><BsArrowBarRight/> Exploring subjects in greater depth.</h4>
                        <h4><BsArrowBarRight/> Building knowledge, skills and brainpower.</h4>
                        <h4><BsArrowBarRight/> Satisfying my curiosity.</h4>
                        <h4><BsArrowBarRight/> Encountering new ideas and challanges.</h4>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
