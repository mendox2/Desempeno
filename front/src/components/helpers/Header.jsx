import { Link } from "react-router-dom";
import { CiBeerMugFull } from "react-icons/ci";

import "./Header.css";

const Header = () => {
  return (
      <div className="contenedor">
        <div className="nav">
          <nav>
          <CiBeerMugFull className="pola"/>

            <br /><br />
            <a href="/home">Home</a>
            <br></br><br />
            <a href="/usuario">Usuario</a>
            <br></br><br />
            <a href="/login">Cerrar Sesion</a>
          </nav>
        </div>
      </div>
  );
};

export default Header;
