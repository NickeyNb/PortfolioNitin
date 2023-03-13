// import React from 'react'
// import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillHeart } from "react-icons/ai";
// import { BsTelegram } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//     return (
//         <footer id="foot">
//             <section>

//                 <div className="endText">
//                     <h2>Design with<AiFillHeart /></h2>
//                     <h2><a href="#home">Nitin Bisht</a></h2>
//                     <br />
//                     <p>“Those who cannot remember the past are condemned to repeat it.” </p>
//                     <h4>Copyright © 2022 | All Rights Reserved</h4>
//                 </div>

//                 <div class="endIcons">
//                     <div class="icon1">
//                         <a href="https://www.linkedin.com/in/nitin-nb-3998091b6/" target="_blank">
//                             <AiFillLinkedin />
//                         </a>
//                     </div>
//                     <div class="icon2">
//                         <a href="https://github.com/NickeyNb" target="_blank">
//                             <AiFillGithub />
//                         </a>
//                     </div>
//                     <div class="icon3">
//                         <a href="mailto:blabla26012000@gmail.com" target="_blank">
//                             <MdEmail />
//                         </a>

//                     </div>
//                     <div class="icon4">
//                         <a href="https://www.instagram.com/idk_nickey_/" target="_blank">
//                             <AiFillInstagram />
//                         </a>
//                     </div>
//                     <div class="icon5">
//                         <a href="https://t.me/idkNickey" target="_blank">
//                             <BsTelegram />
//                         </a>

//                     </div>
//                 </div>

//             </section>
//         </footer>
//     )
// }

// export default Footer

// ==========================

import React from "react";
import logo from "../assets/mainLogo.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillHeart, AiOutlineArrowUp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logo}
          alt="Its the logo of Nitin Nb"
        />
        <h2>Design with<AiFillHeart /></h2>
        <h2>Nitin Bisht</h2>
        <p>“Those who cannot remember the past are condemned to repeat it.” </p>
        <h4>Copyright © 2022 | All Rights Reserved</h4>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/nitin-nb-3998091b6/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/NickeyNb" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="mailto:blabla26012000@gmail.com" target={"blank"}>
            <MdEmail />
          </a>
          <a href="https://www.instagram.com/idk_nickey_/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://t.me/idkNickey" target={"blank"}>
            <BsTelegram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
