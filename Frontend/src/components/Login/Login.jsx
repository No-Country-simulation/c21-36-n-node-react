import styles from "./Login.module.scss";

function Login() {
  return (
    <form className="container">
      <div className={`border ${styles.loginForm}`}>
        <h1 className="loginTitle">Inciciar sesión</h1>
        <h2 className="loginBrand">Devictech</h2>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Inciar sesión
        </button>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión con google
        </button>
        <p>¿Eres Nuevo?</p>
        <a href="">Registrarse</a>
      </div>
    </form>
  );
}
export default Login;
