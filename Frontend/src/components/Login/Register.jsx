import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const errorsNames = {
    required: {
      value: true,
      message: "Es necesario ingresar un nombre",
    },
    minLength: {
      value: 3,
      message: "El nombre debe tener mínimo 3 caracteres",
    },
    maxLength: {
      value: 20,
      message: "El nombre debe tener máximo 20 caracteres",
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "El nombre solo puede contener letras",
    },
  };

  const errorsMail = {
    required: {
      value: true,
      message: "Es necesario ingresar un correo electrónico",
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "El formato del correo es inválido",
    },
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="container" onSubmit={onSubmit}>
      <div className={`border ${styles.registerForm}`}>
        <div className={styles.registerHeader}>
          <h1 className="loginTitle">Registrarse</h1>
          <h2 className="loginBrand">Devictech</h2>
        </div>
        {/* nombre */}
        <div className=" mb-3">
          <input
            type="text"
            {...register("name", errorsNames)}
            className="form-control"
            placeholder="Nombre"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          {errors.name && (
            <span className={styles.spanError}>{errors.name.message}</span>
          )}
        </div>

        <div className=" mb-3">
          <input
            type="text"
            {...register("lastName", errorsNames)}
            className="form-control"
            placeholder="Apellido"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          {errors.lastName && (
            <span className={styles.spanError}>{errors.lastName.message}</span>
          )}
        </div>
        {/* e-mail */}
        <div className="mb-3">
          <input
            type="email"
            {...register("mail", errorsMail)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Correo electrónico"
          />
          {errors.mail && (
            <span className={styles.spanError}>{errors.mail.message}</span>
          )}
        </div>
        {/* password */}
        <div className="mb-3">
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Es necesario una contraseña" },
              minLength: {
                value: 8,
                message: "Debe tener 8 caracteres mínimo",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).+$/,
                message: "Debe tener al menos una letra mayúscula y un número",
              },
            })}
            className="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className={styles.spanError}>{errors.password.message}</span>
          )}
          <input
            type="password"
            {...register("passwordComfirm", {
              required: { value: true, message: "Es necesario una contraseña" },
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirmar contraseña"
          />
          {errors.passwordComfirm && (
            <span className={styles.spanError}>
              {errors.passwordComfirm.message}
            </span>
          )}
        </div>
        {/* fecha de nacimiento */}
        <div className="mb-3">
          <label htmlFor="nacimiento" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            {...register("dateBrith", {
              required: { value: true, message: "Ingrese fecha de nacimiento" },
              validate: (value) => {
                const dateOFBirth = new Date(value);
                const currentDate = new Date();
                const edad =
                  currentDate.getFullYear() - dateOFBirth.getFullYear();

                return edad >= 18 || "Debes ser mayor de edad macho";
              },
            })}
            className="form-control "
            id="nacimiento"
            placeholder="fecha de nacimiento"
          />
          {errors.dateBrith && (
            <span className={styles.spanError}>{errors.dateBrith.message}</span>
          )}
        </div>
        {/* país */}
        <div>
          {" "}
          <select
            {...register("country", {
              required: {
                value: true,
                message: "Ingrese su país de residencia",
              },
            })}
            className="form-select mb-3"
            aria-label="Default select example"
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione su país
            </option>
            <option value="ar">Argentina</option>
            <option value="bo">Bolivia</option>
            <option value="ch">Chile</option>
            <option value="pa">Paraguay</option>
            <option value="ur">Uruguay</option>
          </select>
          {errors.country && (
            <span className={styles.spanError}>{errors.country.message}</span>
          )}
        </div>

        {/* Acuerdo de términos */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            {...register("terms", {
              required: {
                value: true,
                message: " Debe aceptar términos y condiciones",
              },
            })}
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Acepto términos y condiciones
          </label>
          {errors.terms && (
            <span className={styles.spanError}>{errors.terms.message}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
    </form>
  );
}
export default Register;
