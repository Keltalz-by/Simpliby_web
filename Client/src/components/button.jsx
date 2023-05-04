import React from "react";

const Button = ({ name, extraclass, handleClick }) => {
  return (
    <>
      <button
        className={`bg-[#00398E] text-white ${extraclass} font-Esemi`}
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
