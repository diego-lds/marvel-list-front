import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomeTemplate from "../../components/templates/home";
import BaseTemplate from "../../components/templates/base";
import fetchCharacters from "../../service/api";
import { setCharacters } from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchCharacters();
    const chars = parseCharacters(data);
    dispatch(setCharacters(chars));
  };

  return <BaseTemplate template={<HomeTemplate />} />;
};

const parseCharacters = (data) => {
  console.log(data);
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
