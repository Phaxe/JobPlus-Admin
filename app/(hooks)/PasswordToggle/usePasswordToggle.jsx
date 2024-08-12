import { useState } from "react";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const useTogglePassword = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eyeOff);
      setType("text");
    } else {
      setIcon(eye);
      setType("password");
    }
  };

  return { type, icon, handleToggle };
};

export default useTogglePassword;
