import styles from "../css/Note.module.css";
import cx from "classnames";

export default function Note() {
  return (
    <div className={cx(styles.pageContainer)}>
      <section className={cx(styles.notificationSection)}>
        <h2>Notification</h2>
        <div className={cx(styles.searchBox)}>
          <input type="text" placeholder="Search USERS" />
        </div>
        <div className={cx(styles.notificationList)}>
          <p>Guest: Tran Thi B just pawned a ...</p>
        </div>
      </section>

      <section className={cx(styles.cardSection)}>
        <h2>Info Customer</h2>
        <div className={cx(styles.customerBox)}>
          <img
            src="vite.svg"
            alt="user avatar"
          />
          <div className={cx(styles.customerInfo)}>
            <p><b>Name:</b> Tran Thi B</p>
            <p><b>Age:</b> 25</p>
            <p><b>Email:</b> 123455@gmail.com</p>
            <p><b>Phone:</b> 938922</p>
            <p><b>ID:</b> 1245444</p>
          </div>
        </div>

        <div className={cx(styles.productSection)}>
          <img
            src="img"
            alt="motorbike"
          />
        </div>

        <div className={cx(styles.infoSection)}>
          <h3>Info:</h3>
          <p><b>Name:</b> B</p>
          <p><b>Price:</b> 13 million VND</p>
          <p><b>Holding Day:</b> 1-1-1</p>
          <p><b>Pick Up Date:</b> 8-1-1</p>
          <p><b>Holder:</b> A</p>
          <p><b>Type:</b> Xe Yamaha</p>
          <p><b>Expired on:</b> 7 days</p>
        </div>
      </section>
    </div>
  );
}
