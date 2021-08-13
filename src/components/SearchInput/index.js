import Select from "react-select";

import "./styles.css";

const SearchInput = ({ placeholder, options, handleOnChange }) => {
  return (
    <>
      <div className="search-input">
        <Select
          placeholder={placeholder}
          options={options}
          onInputChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
};

export default SearchInput;
