import React from "react";
import NavbarElement from "./NavbarElement";
import { AiFillHome } from "react-icons/ai";
import { TbListCheck } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full bg-gray-950 py-5 px-10 h-1/4">
      <div className="w-full flex justify-between">
        <img src={require("../../../images/logo.png")} className="w-48" />
        <div className="flex justify-center items-center text-white">
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
