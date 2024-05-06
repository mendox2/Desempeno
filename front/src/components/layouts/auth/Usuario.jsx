import { usuarios } from "../../database/dataBase.jsx";
import Login from "./Login.jsx";
import "../../helpers/Header.css";
import { FaUser } from "react-icons/fa";
import { CiBeerMugFull } from "react-icons/ci";


function Usuario(){
    return(
        
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
            <div className="users">
            <FaUser className="Fuser"/>
            <p>Empresa: CESDE</p>
            <p>Contratacion: 06/05/2024</p>
            <p>Salario: 80.000.000</p>
            <p>Nombre: {/*{usuarios.user}*/}Administrador 1</p>
            <p>Correo: admin@gmail.com</p>
            </div>
        </div>
    )
}

export { Usuario };