import styles from "./Spot.module.scss";

function SpotBottom() {
  return (
    <div className={`container ${styles.spot}`}>
      <div className={styles.spotBottom}>
        <p className={styles.spotText}>Spot</p>
      </div>
    </div>
  );
}
export default SpotBottom;
