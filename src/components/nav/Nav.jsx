import { React, useState } from "react";
import "./nav.css";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineContacts } from "react-icons/ai";
import { GiRank3 } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState("#home");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <GiRank3 />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
