import Select from "react-select";

import "./styles.css";

const SearchInput = ({
  placeholder,
  options,
  handleOnChange,
  handleOnSelect,
}) => {
  const styles = {
    control: (styles) => ({
      ...styles,
      fontFamily: "Open Sans",
    }),
    option: (styles) => {
      return {
        ...styles,
        fontFamily: "Open Sans",
      };
    },
  };

  return (
    <>
      <Select
        id="test"
        placeholder={placeholder}
        noOptionsMessage={() => null}
        options={options || []}
        onChange={handleOnSelect}
        onInputChange={handleOnChange}
        styles={styles}
        // onKeyDown={handleOnSelect}
      />
    </>
  );
};

export default SearchInput;
