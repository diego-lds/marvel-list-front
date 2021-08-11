import CardCharacters from "../CardCharacter";
import "./styles.css";

const Grid = ({ list, handleOnClick }) => {
  const renderCards = (item) => (
    <div key={item.id} onClick={() => handleOnClick(item)} className="card">
      <CardCharacters charName={item.name} imgURL={item.imgURL} />
    </div>
  );

  return (
    <>
      <div className="grid-container">{list.map(renderCards)}</div>
    </>
  );
};

export default Grid;
