import BaseTemplate from "../../components/templates/base";
import DetailTemplate from "../../components/templates/detail";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Detail = () => {
  const { selectedCharacter } = useSelector((state) => state.charactersReducer);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <BaseTemplate
      template={
        <DetailTemplate character={selectedCharacter} goBack={goBack} />
      }
    />
  );
};

export default Detail;
