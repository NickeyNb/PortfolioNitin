
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
        <h3>Design with<AiFillHeart /></h3>
        <h2>Nitin Bisht</h2>
        <p>“Those who cannot remember the past are condemned to repeat it.” </p>
        <h4>Copyright © 2022 | All Rights Reserved</h4>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/nitin-nb-3998091b6/" rel="noreferrer" target={"_blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/NickeyNb" rel="noreferrer" target={"_blank"}>
            <AiFillGithub />
          </a>
          <a href="mailto:blabla26012000@gmail.com" rel="noreferrer" target={"_blank"}>
            <MdEmail />
          </a>
          <a href="https://www.instagram.com/idk_nickey_/" rel="noreferrer" target={"_blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://t.me/idkNickey" rel="noreferrer" target={"_blank"}>
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
