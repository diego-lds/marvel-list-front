import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomeTemplate from "../../components/templates/home";
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

  return <HomeTemplate />;
};

const parseCharacters = (data) => {
  const parsed = data?.data?.data?.results.map((item) => {
    const seriesData = item?.series?.items.map((item) => ({ name: item.name }));
    const obj = {
      id: item.id,
      name: item.name,
      series: seriesData,
    };
    return obj;
  });
  return parsed;
};

export default Home;
