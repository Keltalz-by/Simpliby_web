import React from "react";

const TextInput = ({ name, type, error }) => {
  return (
    <div className="flex flex-col items-start ">
      <label htmlFor={name} className="ml-2">
        {name}
      </label>
      <span>
        <input
          type={type ? type : "text"}
          name={name}
          className="border border-[#64BCF4] rounded-lg w-[25rem] h-[2.5rem] focus:outline-none px-2"
        />
        {error && <span>{error}</span>}
      </span>
    </div>
  );
};

export default TextInput;
