import React from "react";

const TextInput = ({
  name,
  type,
  title,
  placeholder,
  value,
  handleChange,
  error,
  extraclass,
}) => {
  // const { InputError } = error;

  return (
    <div className="flex flex-col items-start ">
      <label htmlFor={name} className="ml-2">
        {title}
      </label>
      <span>
        <input
          type={type ? type : "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          className={`border-[1.5px] ${
            (error?.InputError && value == "") |
            (type == "password" && error?.InputError == "password mismatch")
              ? "border-[red]"
              : "border-[#64BCF4]"
          } rounded-lg w-[25rem] h-[2.5rem] focus:outline-none px-2 ${extraclass}`}
        />
      </span>
    </div>
  );
};

export default TextInput;
