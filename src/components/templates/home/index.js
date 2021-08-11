import Grid from "../../molecules/Grid";
import { selectCharacter } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.css";

const HomeTemplate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.charactersReducer);

  const handleOnClick = async (char) => {
    await dispatch(selectCharacter(char));
    history.push("/detail");
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
