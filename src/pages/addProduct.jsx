import styles from "../css/AddProduct.module.css";
import cx from "classnames";


export default function AddProduct() {
  return (
    <div className={cx(styles.pageContainer)}>
      <div className={cx(styles.customerSection)}>
        <h2>Info Customers</h2>
        <div className={cx(styles.customerBox)}>
          <img src="vite.svg" alt="avatar" />
          <div className={cx(styles.customerInfo)}>
            <p><b>Name:</b> Tran Thi B</p>
            <p><b>Age:</b> 25</p>
            <p><b>Email:</b> 12345@gmail.com</p>
            <p><b>Phone:</b> 938922</p>
            <p><b>ID:</b> 1245444</p>
          </div>
        </div>
      </div>

      <div className={cx(styles.productSection)}>
        <h3 className={cx(styles.titleFade)}>img</h3>
        <img src="xe-may.png" alt="Xe máy" />
      </div>

      <div className={cx(styles.infoSection)}>
        <h3>Info</h3>
        <p><b>Name:</b> B</p>
        <p><b>Price:</b> 13 million VND</p>
        <p><b>Start Day:</b> 1-1-1</p>
        <p><b>End Date:</b> 8-1-1</p>
        <p><b>Type:</b> Xe Yamaha</p>
        <p><b>Expired on:</b> 7 days</p>

        <div className={cx(styles.btnGroup)}>
          <button className={cx(styles.add)}>Add</button>
          <button className={cx(styles.prev)}>Prev</button>
        </div>
      </div>
    </div>
  );
}