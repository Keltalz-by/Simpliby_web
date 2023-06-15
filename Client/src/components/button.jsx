import React from "react";

const Button = ({ name, extraclass, handleClick, loading }) => {
  return (
    <>
      <button
        className={`bg-[#00398E] text-white text-xl ${extraclass} font-Esemi`}
        onClick={(e) => handleClick()}
        disabled={loading}
      >
        {loading === true ? "loading..." : name}
      </button>
    </>
  );
};

export default Button;
