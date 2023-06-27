import React, { useEffect, useState } from "react";
import ProblemBar from "./ProblemBar";
import { useDispatch } from "react-redux";
import { getProblemsList } from "../../redux/reducers/problems/problemsActions";

function Problems() {
  const [problems, setProblems] = useState([
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
    { name: "Hello", difficulty: "Hard" },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProblemsList()).then((data) => {
      console.log(data.payload);
      setProblems(data.payload.data.problems);
    });
  }, []);

  return (
    <div className="w-full h-full bg-gray-400 p-10 flex justify-center items-center">
      <div className="w-1/2 h-full">
        <h1 className="text-3xl">Problems :</h1>
        {problems.map((problem, index) => {
          return <ProblemBar number={index + 1} {...problem} />;
        })}
      </div>
    </div>
  );
}

export default Problems;
