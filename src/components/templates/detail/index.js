import "./styles.css";

const DetailTemplate = ({ character }) => {
  console.log(character);
  const { imgURL, name, series, description } = character;
  console.log(series);
  return (
    <>
      <div className="detail">
        <div>
          <img src={imgURL} />
        </div>
        <div className="description">
          <span>{name}</span>
          <p>{description}</p>
        </div>
      </div>
      <div className="series-list">
        <span>LISTAGEM DE SERIES</span>
        <hr />
        <ul>
          {series.map((serie) => (
            <li key={serie.name}>
              <span>{serie.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailTemplate;
