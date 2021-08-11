import BaseTemplate from "../../components/templates/base";
import DetailTemplate from "../../components/templates/detail";
import { useSelector } from "react-redux";

const Detail = () => {
  const { selectedCharacter } = useSelector((state) => state.charactersReducer);
  console.log(selectedCharacter);
  return (
    <BaseTemplate template={<DetailTemplate character={selectedCharacter} />} />
  );
};

export default Detail;
