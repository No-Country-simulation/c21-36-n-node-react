import styles from "./Login.module.scss";

function Validation() {
  return (
    <div className="container">
      <form
        class={`row g-3 needs-validation border ${styles.validationForm}`}
        novalidate
      >
        <div class="col-md-4">
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            value=""
            placeholder="Nombre"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            value=""
            placeholder="Apellido"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              placeholder="Nombre de usuario"
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Ciudad"
            required
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3">
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Provincia
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            placeholder=" Código postal"
            required
          />
          <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Acepto términos y condiciones
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Enviar formulario
          </button>
        </div>
      </form>
    </div>
  );
}

export default Validation;
