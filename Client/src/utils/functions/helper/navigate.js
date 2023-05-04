import { useNavigate } from "react-router-dom";

const useNav = () => {
  const navigate = useNavigate();
  return navigate;
};

export default useNav;
