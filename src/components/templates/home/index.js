import { useSelector } from "react-redux";
import "./styles.css";

const HomeTemplate = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <>
      <span className="teste">PAGE</span>
    </>
  );
};

export default HomeTemplate;
