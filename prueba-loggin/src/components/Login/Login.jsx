import styles from "./Login.module.css";
import { InputControl } from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Iniciar = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="Ingrese su contraseña"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={Iniciar} disabled={submitButtonDisabled}>Iniciar sesión</button>
          <p>
            Crear cuenta
            <span>
              <Link to="/signup"> click aquí</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}