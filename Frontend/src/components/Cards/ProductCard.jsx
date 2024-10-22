import styles from "./ProductCard.module.scss";
import ActionButton from "../buttons/ActionButton";

function ProductCard(props) {
  return (
    <div className={`card ${styles.productcard} ${styles.card}`}>
      <div className={`${styles.productImg}`}>
        <img src={props.img} alt="..." />
      </div>

      <div className={`${styles.cardBody}`}>
        <h5 className={`${styles.productTitle}`}>{props.title}</h5>
        <p className={`${styles.CardPrice}`}>${props.price}</p>
        <ActionButton
          className={`btn btn-primary ${styles.productCardBtn}`}
          text="Añadir al carrito "
        />
      </div>
    </div>
  );
}

export default ProductCard;
