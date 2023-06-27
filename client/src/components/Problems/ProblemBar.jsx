import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

function ProblemBar({ number, name, difficulty }) {
  return (
    <Link to={`/problem/${name}`} className="w-full cursor-pointer hover:bg-purple-700 shadow-xl p-4 bg-white flex flex-row justify-between text-base mt-2 rounded-lg items-center">
      <div className="flex flex-row">
        <h1 className="">
          {number}{".)"}
        </h1>
        <h1 className="ml-2">{name}</h1>
      </div>
      <div
        className={classNames("rounded-lg p-2", {
          "bg-green-500": difficulty == "Easy",
          "bg-yellow-500": difficulty == "Medium",
          "bg-red-500": difficulty == "Hard",
        })}
      >
        <h1>{difficulty}</h1>
      </div>
    </Link>
  );
}

export default ProblemBar;
