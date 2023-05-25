import { useState } from "react";
import { Switch } from "@headlessui/react";

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-gray-200" : "bg-blue-500"
      } relative inline-flex h-4 w-7 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-4" : "translate-x-1"
        } inline-block h-2 w-2 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
export default Toggle;
