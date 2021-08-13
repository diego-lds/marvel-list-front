import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectCharacter } from "../../store/actions";
import { setCharacters } from "../../store/actions";

import fetchCharacters from "../../service/api";

import HomeTemplate from "../../components/templates/home";
import BaseTemplate from "../../components/templates/base";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.charactersReducer);
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [listOptions, setListOptions] = useState();
  const [endpointConfig, setEndpointConfig] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const selectChar = async (char) => {
    await dispatch(selectCharacter(char));
    history.push("/detail");
  };

  const handleOnClick = async (char) => {
    selectChar(char);
  };

  const handleOnChange = (value) => {
    if (value.length > 2) {
      fetchCharacters(value, 0).then((data) => {
        console.log(data);
        const characters = parseCharacters(data);
        setSearchedCharacters(characters);
        const listOption = characters.map(parseOption);

        setListOptions(listOption);
      });
    }
  };

  const handleOnSelect = (value) => {
    const char = searchedCharacters.find((char) => char.id === value.id);
    selectChar(char);
  };

  const parseOption = (data) => ({
    value: data.name.toLowerCase(),
    label: data.name,
    id: data.id,
  });

  const fetchData = async (offset = 0) => {
    const data = await fetchCharacters("", offset);

    const endpointConfig = {
      limit: Number(data?.data?.data?.limit),
      offset: Number(data?.data?.data?.offset),
      total: Number(data?.data?.data?.total),
    };
    setEndpointConfig(endpointConfig);

    const chars = parseCharacters(data);
    dispatch(setCharacters(chars));
  };

  const handleOnClickPage = (value) => {
    if (value === "right") {
      const off = endpointConfig.offset + endpointConfig.limit;
      fetchData(off);
    } else {
      const off = endpointConfig.offset - endpointConfig.limit;

      fetchData(off < 0 && 0);
    }
  };

  return (
    <BaseTemplate
      template={
        <HomeTemplate
          listOptions={listOptions}
          characters={characters}
          handleOnClick={handleOnClick}
          handleOnChange={handleOnChange}
          handleOnSelect={handleOnSelect}
          handleOnClickPage={handleOnClickPage}
          endpointConfig={endpointConfig}
        />
      }
    />
  );
};

const parseCharacters = (data) => {
  const parsed = data?.data?.data?.results.map((item) => ({
    id: item.id.toString(),
    name: item.name,
    series: item?.series?.items.map((item) => ({ name: item.name })),
    imgURL: `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`,
    description: item.description,
  }));
  return parsed;
};

export default Home;
