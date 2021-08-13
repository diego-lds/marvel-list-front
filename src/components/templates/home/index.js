import Grid from "../../molecules/Grid";
import Pagination from "../../Pagination";
import SearchInput from "../../SearchInput";

import "./styles.css";

const HomeTemplate = ({
  characters,
  handleOnClick,
  handleOnChange,
  handleOnSelect,
  listOptions,
  handleOnClickPage,
  endpointConfig,
}) => {
  return (
    <>
      <div className="title">
        <p>DESAFIO</p>
        <p>LISTAGEM DE PERSONAGENS DA MARVEL</p>
      </div>
      <div className="input-search">
        <SearchInput
          placeholder="Buscador de personagens"
          options={listOptions}
          handleOnChange={handleOnChange}
          handleOnSelect={handleOnSelect}
        />
      </div>
      <Pagination
        handleOnClickPage={handleOnClickPage}
        endpointConfig={endpointConfig}
      />
      <Grid list={characters} handleOnClick={handleOnClick} />
    </>
  );
};

export default HomeTemplate;
