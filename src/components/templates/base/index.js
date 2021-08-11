import imgThanos from "../../../assets/background-image-thanos.png";
import logoMarvel from "../../../assets/logo-marvel.png";
import "./styles.css";

const BaseTemplate = ({ template }) => {
  return (
    <>
      <div className="main">
        <img className="background-image" src={imgThanos} />
        <div className="header">
          <img className="marvel-logo" src={logoMarvel} />
        </div>
        <div className="container">
          <div className="content">{template}</div>
        </div>
      </div>
    </>
  );
};

export default BaseTemplate;
