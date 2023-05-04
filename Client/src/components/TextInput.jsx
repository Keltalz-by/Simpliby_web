import React from "react";

const TextInput = ({ name, type, placeholder, value, handleChange, error }) => {
  const { InputError } = error;

  return (
    <div className="flex flex-col items-start ">
      <label htmlFor={name} className="ml-2">
        {placeholder}
      </label>
      <span>
        <input
          type={type ? type : "text"}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          className={`border-[1.5px] ${
            (InputError && value == "") |
            (type == "password" && InputError == "password mismatch")
              ? "border-[red]"
              : "border-[#64BCF4]"
          } rounded-lg w-[25rem] h-[2.5rem] focus:outline-none px-2`}
        />
      </span>
    </div>
  );
};

export default TextInput;
