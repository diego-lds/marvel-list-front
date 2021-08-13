import { useState } from "react";
import Grid from "../../molecules/Grid";
import SearchInput from "../../SearchInput";
import { selectCharacter } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.css";

const HomeTemplate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.charactersReducer);
  const [stringSearch, setStringSearch] = useState("");

  const handleOnClick = async (char) => {
    await dispatch(selectCharacter(char));
    history.push("/detail");
  };

  const handleOnChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <p>DESAFIO</p>
      <p>LISTAGEM DE PERSONAGENS DA MARVEL</p>
      <SearchInput
        placeholder="Buscador de personagens"
        options={options}
        handleOnChange={handleOnChange}
      />
      <Grid list={characters} handleOnClick={handleOnClick} />
    </>
  );
};

export default HomeTemplate;
