import styles from "./Spot.module.scss";

function SpotTop() {
  return (
    <div className={`container ${styles.spot}`}>
      <div className={styles.spotTop}>
        <p className={styles.spotText}>Spot</p>
      </div>
    </div>
  );
}
export default SpotTop;
