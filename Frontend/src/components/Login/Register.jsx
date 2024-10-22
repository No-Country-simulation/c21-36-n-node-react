import styles from "./Login.module.scss";

function Register() {
  return (
    <form className="container">
      <div className={`border ${styles.registerForm}`}>
        <div className={styles.registerHeader}>
          <h1 className="loginTitle">Inciciar sesión</h1>
          <h2 className="loginBrand">Devictech</h2>
        </div>
        <div class=" mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
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
            className="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="Contraseña"
          />
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirmar contraseña"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Estoy de acuerdo con los términos y condiciones y la política de
            privacidad de datos.
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
    </form>
  );
}
export default Register;
