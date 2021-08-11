import "./styles.css";

const CardCharacter = ({ imgURL, charName }) => {
  return (
    <>
      <div className="char-card">
        <img src={imgURL} />
        <span>{charName}</span>
      </div>
    </>
  );
};

export default CardCharacter;
