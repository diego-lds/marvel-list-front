import Grid from "../../molecules/Grid";
import { useSelector } from "react-redux";

import "./styles.css";

const HomeTemplate = () => {
  const { characters } = useSelector((state) => state.charactersReducer);

  const handleOnClick = (char) => {
    console.log(char);
  };
  return (
    <>
      <p>DESAFIO</p>
      <p>LISTAGEM DE PERSONAGENS DA MARVEL</p>
      <input />
      <Grid list={characters} handleOnClick={handleOnClick} />
    </>
  );
};

export default HomeTemplate;
