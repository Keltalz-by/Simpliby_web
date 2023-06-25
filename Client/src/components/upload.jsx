import { GoArrowUp } from "react-icons/go";

const Upload = ({ title }) => {
  return (
    <div className=" flex flex-col items-start ">
      <label htmlFor="image" className="ml-2">
        {title}
      </label>
      <span className="relative overflow-hidden border-2 border-dotted border-[#64BCF4] flex items-center rounded-lg justify-center p-2 w-[25rem] h-[5rem]">
        <input
          type="file"
          className="absolute  opacity-0 h-full"
          name="image"
        />
        <div className="flex flex-col items-center justify- text-center cursor-pointer">
          <GoArrowUp className="w-10 h-10" />
          <p className="text-[#00398E]">Browse file</p>
        </div>
      </span>
    </div>
  );
};

export default Upload;
