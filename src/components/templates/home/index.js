import Grid from "../../molecules/Grid";
import SearchInput from "../../SearchInput";

import "./styles.css";

const HomeTemplate = ({
  characters,
  handleOnClick,
  handleOnChange,
  handleOnSelect,
  listOptions,
}) => {
  return (
    <>
      <p>DESAFIO</p>
      <p>LISTAGEM DE PERSONAGENS DA MARVEL</p>
      <div className="input-search">
        <SearchInput
          placeholder="Buscador de personagens"
          options={listOptions}
          handleOnChange={handleOnChange}
          handleOnSelect={handleOnSelect}
        />
      </div>
      <Grid list={characters} handleOnClick={handleOnClick} />
    </>
  );
};

export default HomeTemplate;
