import "./styles.css";

const Pagination = ({ endpointConfig, handleOnClickPage }) => {
  const inicio = endpointConfig?.offset + 1;
  const final = endpointConfig?.limit + endpointConfig?.offset;

  return (
    <>
      <div className="box">
        <button
          onClick={(e) => {
            handleOnClickPage("left");
          }}
        >
          <span>&#10094;</span>
        </button>
        <p className="page-info">{`Mostrando ${inicio}-${final} de ${endpointConfig?.total}`}</p>
        <button
          onClick={(e) => {
            handleOnClickPage("right");
          }}
        >
          <span>&#10095;</span>
        </button>
      </div>
    </>
  );
};

export default Pagination;
