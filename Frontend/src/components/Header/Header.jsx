/* import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import IconNavBar from "./IconNavBar";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${styles.navBar}`}>
          <div className={`container-fluid ${styles.containerFluid}`}>
            <button
              className={`navbar-toggler ${styles.navbartoggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className={`navbar-brand fw-bolder ${styles.navbarBrand}`}
              href="#"
            >
              DevicTech
            </a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className={`nav-link ${styles.navLink}`}
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
                <a className={`nav-link ${styles.navLink}`} href="#">
                  Tienda
                </a>
                <a className={`nav-link ${styles.navLink}`} href="#">
                  Categorías
                </a>
                <a className={`nav-link ${styles.navLink}`} href="#">
                  Vender
                </a>
              </div>
            </div>
            <div className={`${styles.iconsNavBar}`}>
              <IconNavBar text="Ingresar" icon={<PersonIcon />} />
              <IconNavBar text="Favoritos" icon={<FavoriteBorderIcon />} />
              <IconNavBar text="Carrito" icon={<ShoppingCartIcon />} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
 */

import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconNavBar from "./IconNavBar";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${styles.navBar}`}>
          <div className={`container-fluid ${styles.containerFluid}`}>
            <button
              className={`navbar-toggler ${styles.navbartoggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className={`navbar-brand fw-bolder ${styles.navbarBrand}`}
              href="#"
            >
              DevicTech
            </a>

            {/* Este contenedor colapsable contiene solo los links del menú */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className={`nav-link ${styles.navLink}`}
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
                <a className={`nav-link ${styles.navLink}`} href="#">
                  Tienda
                </a>
                <a className={`nav-link ${styles.navLink}`} href="#">
                  Categorías
                </a>
                <a className={`nav-link ${styles.navLink}`} href="#">
                  Vender
                </a>
              </div>
            </div>

            {/* Íconos siempre visibles, fuera del menú colapsable */}
            <div className={`${styles.iconsNavBar} d-flex`}>
              <IconNavBar text="Ingresar" icon={<PersonIcon />} />
              <IconNavBar text="Favoritos" icon={<FavoriteBorderIcon />} />
              <IconNavBar text="Carrito" icon={<ShoppingCartIcon />} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
