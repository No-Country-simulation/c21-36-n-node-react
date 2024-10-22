import styles from "./StoresOfTheMonth.module.scss";

function StoresOfTheMonth() {
  return (
    <div className="container">
      <p className={styles.storeMonthTitle}>Tiendas del mes</p>
      <div className=" text-center">
        <div className={`row ${styles.row}`}>
          <div className={`col-6 ${styles.storeMonthImg}`}>
            <img
              src="https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className={`col-3 ${styles.storeMonthImg}`}>
            <img
              src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className={`col-3 ${styles.storeMonthImg}`}>
            <img
              src="https://images.pexels.com/photos/5650544/pexels-photo-5650544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={`col-3 ${styles.storeMonthImg}`}>
            <img
              src="https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className={`col-3 ${styles.storeMonthImg}`}>
            <img
              src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className={`col-6 ${styles.storeMonthImg}`}>
            <img
              src="https://images.pexels.com/photos/5650544/pexels-photo-5650544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoresOfTheMonth;
