import "./styles.css";

const DetailTemplate = ({ character, goBack }) => {
  const { imgURL, name, series, description } = character;
  return (
    <>
      <span className="go-back" onClick={goBack}>
        &#10094; VOLTAR
      </span>
      <div className="detail">
        <div>
          <img src={imgURL} />
        </div>
        <div className="description">
          <span>{name}</span>
          <p>{description || "Descrição não disponível"}</p>
        </div>
      </div>
      <div className="series-list">
        <span>LISTAGEM DE SERIES</span>
        <hr />
        <ul>
          {series.length > 0 ? (
            series.map((serie) => (
              <li key={serie.name}>
                <span>{serie.name}</span>
              </li>
            ))
          ) : (
            <span>Sem series listadas 😢</span>
          )}
        </ul>
      </div>
    </>
  );
};

export default DetailTemplate;
