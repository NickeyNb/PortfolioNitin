import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/Personal.png";
import img2 from "../assets/SortingVis.png";
import img3 from "../assets/CustomMap.png";
import img4 from "../assets/Sudoku.png";
import img5 from "../assets/WeatherApp.png";


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
              <img src={img1} alt="My Project wallpaper"/>
              <aside>
                <h3>Portfolio</h3>
                <p>Built my portfolio that showcases my project, experience and demonstrate my skills as a developer and a designer.</p>
                <a target={"blank"} href={"https://nickeynb.github.io/PortfolioNitin/"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img2} alt="My Project wallpaper"/>
              <aside>
                <h3>Visualizer</h3>
                <p>Build a sorting algorithm visualizer, which can visualize 7 different sorting algorithms.</p>
                <a target={"blank"} href={"https://nickeynb.github.io/SortingVisualizer/"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img3} alt="My Project wallpaper"/>
              <aside>
                <h3>Map</h3>
                <p>Started making it just to learn about APIs. It was fun making custom map of my favourite
                  childhoop game.</p>
                <a target={"blank"} href={"https://github.com/NickeyNb"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img4} alt="My Porject wallpaper"/>
              <aside>
                <h3>Sudoku</h3>
                <p>Tackle the problem of solving sudoku puzzle. Not easy when i started making it from
                  tutorials but the process was fun. </p>
                <a target={"blank"} href={"https://nickeynb.github.io/SudokuApp/"}>
                  View Demo
                </a>
              </aside>
            </div>

            <div className="item">
              <img src={img5} alt="My Porject wallpaper"/>
              <aside>
                <h3>Weather</h3>
                <p>Developed a real-time weather application that
                  uses weather API to tells the weather of a particular region with an accuracy of 90%.</p>
                <a target={"blank"} href={"https://nickeynb.github.io/WeatherApp/"}>
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

