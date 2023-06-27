import React from "react";
import NavbarElement from "./NavbarElement";
import { AiFillHome } from "react-icons/ai";
import { TbListCheck } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full px-10 py-5 bg-gray-950 h-1/4">
      <div className="flex justify-between w-full">
        <img src={require("../../../images/logo.png")} className="w-56" />
        <div className="flex items-center justify-center text-white">
          <NavbarElement label="Home" id="home">
            <AiFillHome size={20} className="mr-2" />
          </NavbarElement>
          <NavbarElement label="Problems" id="problems">
            <TbListCheck size={20} className="mr-2" />
          </NavbarElement>
          <NavbarElement label="Contests" id="contests">
            <GiTrophyCup size={20} className="mr-2" />
          </NavbarElement>
          <NavbarElement label="Profile" id="profile">
            <FaUserSecret size={20} className="mr-2" />
          </NavbarElement>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
