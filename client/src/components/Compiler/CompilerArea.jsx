import React, { useState } from "react";
import CustomButton from "../CustomButton";

function CompilerArea() {
  const [code, setCode] = useState();
  function changeHandler(e) {
    setCode(e.target.value);
  }
  return (
    <div className="w-3/5 h-full p-5">
      <textarea
        onChange={changeHandler}
        className="w-full p-2 text-lg text-black rounded-lg shadow-lg resize-none"
        placeholder="Write your C++ code here !!"
        style={{height:'95%'}}
      />
      <div className="flex flex-row justify-end px-4">
        <div className="flex items-center justify-center p-2 text-lg">
          <CustomButton
            bgColor="#FF7B00"
            textColor="black"
            text={"Run Code"}
            fontSize={"1.125rem"}
          />
        </div>
        <div className="flex items-center justify-center p-2 text-lg">
          <CustomButton
            bgColor="#FF0099"
            textColor="black"
            text={"Submit"}
            fontSize={"1.125rem"}
          />
        </div>
      </div>
    </div>
  );
}

export default CompilerArea;
