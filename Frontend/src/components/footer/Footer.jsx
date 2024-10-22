import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className="row">
          <div className="col-3">
            <p className={styles.footColtitle}>¿Necesitas ayuda?</p>
            <p className={styles.footText}>Seguimiento de compra</p>
            <p className={styles.footText}>Cambios y devoluciones</p>
            <p className={styles.footText}>Preguntas frecuentes</p>
            <p className={styles.footText}>Servicio al cliente</p>
            <p className={styles.footText}>Cuenta</p>
          </div>
          <div className="col-3">
            <p className={styles.footColtitle}>Sobre nosotros</p>
            <p className={styles.footText}>Quienes somos</p>
            <p className={styles.footText}>Misión</p>
            <p className={styles.footText}>Politicas de seguridad</p>
          </div>
          <div className="col-3">
            <p className={styles.footColtitle}>Unirse a DevicTech</p>
            <p className={styles.footText}>Vender en DevicTech</p>
            <p className={styles.footText}>Trabaja con nosotros</p>
            <p className={styles.footText}>Inversionistas</p>
          </div>
          <div className="col-3">
            <p className={styles.footColtitle}>Suscríbete a DevicTech</p>
          </div>
        </div>
        <div className={styles.footWebs}>
          <p className={styles.footWebsTitle}>Síguenos</p>
          <div className={styles.footWebsIcons}>
            <div className={styles.footIcon}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-256.png"
                alt=""
              />
            </div>
            <div className={styles.footIcon}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_1-facebook-256.png"
                alt=""
              />
            </div>
            <div className={styles.footIcon}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png"
                alt=""
              />
            </div>
            <div className={styles.footIcon}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-256.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <a className={`navbar-brand fw-bolder ${styles.footDevic}`} href="#">
            DevicTech
          </a>
          <p className={styles.copyrightText}>
            Copyright © 2024 DevichTech. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
