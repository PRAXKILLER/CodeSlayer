import React from "react";

function CustomButton({ text, bgColor, textColor, onPress }) {
  return (
    <button
      onClick={onPress}
      className={`w-full rounded-lg flex justify-center p-2`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-xl" style={{ color: textColor }}>
        {text}
      </h1>
    </button>
  );
}

export default CustomButton;
