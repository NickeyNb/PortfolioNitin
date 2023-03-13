import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/NbPort.png"
import img2 from "../assets/NbPort.png"
import img3 from "../assets/NbSudoku.png"
import img4 from "../assets/NbCustomMap.jpg"
import img5 from "../assets/NbCustomMap.jpg"


const Projects = () => {
  return (
    <div id="projects">
      <h2>Project</h2>
      <section>
        <article>
          <Carousel
            // showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div className="item">
              <img src={img1} alt="My Porject wallpaper"/>
              <aside>
                <h3>Portfolio</h3>
                <p>Built my portfolio that showcases my project, experience and demonstrate my skills as a developer and a designer.</p>
                <a target={"blank"} href={"https://github.com/NickeyNb"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img2} alt="My Porject wallpaper"/>
              <aside>
                <h3>Sorting Visualizer</h3>
                <p>Build a sorting algorithm visualizer, which can visualize 7 different sorting algorithms.</p>
                <a target={"blank"} href={"https://github.com/NickeyNb"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img3} alt="My Porject wallpaper"/>
              <aside>
                <h3>Custom Map</h3>
                <p>Started making it just to learn about APIs. It was fun making custom map of my favourite
                  childhoop game. :)</p>
                <a target={"blank"} href={"https://github.com/NickeyNb"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img4} alt="My Porject wallpaper"/>
              <aside>
                <h3>Sudoku Application</h3>
                <p>Tackle the problem of solving sudoku puzzle. Not easy when i started making it from
                  tutorials but the process was fun. </p>
                <a target={"blank"} href={"https://github.com/NickeyNb"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img5} alt="My Porject wallpaper"/>
              <aside>
                <h3>Weather Application</h3>
                <p>Developed a real-time weather application that
                  uses weather API to tells the weather of a particular region with an accuracy of 90%.</p>
                <a target={"blank"} href={"https://github.com/NickeyNb"}>
                  View Demo
                </a>
              </aside>
            </div>
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Projects;

// ====================

// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import data from "../assets/data.json";

// const Projects = () => {
//   return (
//     <div id="projects">
//       <h2>Projects</h2>
//       <section>
//         <article>
//           <Carousel
//             showArrows={false}
//             showIndicators={false}
//             showStatus={false}
//             showThumbs={false}
//             interval={2000}
//             infiniteLoop={true}
//             autoPlay={true}
//           >
//             {data.projects.map((i) => (
//               <div key={i.title} className="workItem">
//                 <img src={i.imgSrc} alt={i.title} />
//                 <aside>
//                   <h3>{i.title}</h3>
//                   <p>{i.description}</p>
//                   <a target={"blank"} href={i.url}>
//                     View Demo
//                   </a>
//                 </aside>
//               </div>
//             ))}
//           </Carousel>
//         </article>
//       </section>
//     </div>
//   );
// };

// export default Projects;