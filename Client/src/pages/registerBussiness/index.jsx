import { useState } from "react";
import Register from "./registerForm";
import Modal from "./modal";

const index = () => {
  const [open, setIsopen] = useState(false);
  return (
    <div className="relative">
      <Register setIsOpen={setIsopen} />
      <div
        className={`${
          open ? "fixed block top-0 left-0" : "hidden"
        } w-full h-full`}
      >
        <Modal setIsOpen={setIsopen} />
      </div>
    </div>
  );
};

export default index;
