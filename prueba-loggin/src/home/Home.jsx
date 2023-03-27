import { Link } from "react-router-dom";
export function Home(props) {
  return (
    <div>
      <div>
        <div>
            <h1>
                <Link to={"/login"}>Iniciar Sesión</Link>
            </h1>
            <br />
            <h1>
                <Link to={"/signup"}>Registrarse</Link>
            </h1>
        </div>
      </div>
      <h2>{props.name ?`Bienvenido - ${props.name}`: "Debes iniciar sesión"}</h2>
    </div>
  );
}
 