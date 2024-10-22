import styles from "./Header.module.scss";

function IconNavBar(props) {
  return (
    <div>
      <div className={`${styles.NavBarIcon}`}>{props.icon}</div>
      <p className={`${styles.iconText}`}>{props.text}</p>
    </div>
  );
}
export default IconNavBar;
