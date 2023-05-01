import React from "react";

const Button = ({ name, extraclass }) => {
  return (
    <>
      <button className={`bg-[#00398E] text-white ${extraclass} font-Esemi`}>
        {name}
      </button>
    </>
  );
};

export default Button;
