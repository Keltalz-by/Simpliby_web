import { useState } from "react";
import { Switch, Tab } from "@headlessui/react";

const Toggle = () => {
  const [enabled, setEnabled] = useState("active");
  const Toggle = (state) => {
    setEnabled(state);
  };

  return (
    <Tab.Group className="">
      <Tab.List className="">
        <Tab
          onClick={() => Toggle("active")}
          className={`px-11 py-2 text-center rounded-md ${
            enabled == "active" ? `bg-white text-[#00398E]` : `text-[#222222B2]`
          }`}
        >
          Active
        </Tab>
        <Tab
          onClick={() => Toggle("offline")}
          className={`px-11 py-2  text-center rounded-md ${
            enabled == "offline"
              ? `bg-white text-[#00398E]`
              : `text-[#222222B2]`
          }`}
        >
          Offline
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
};
export default Toggle;
