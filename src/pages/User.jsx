import styles from "../css/User.module.css";
import cx from "classnames";

export default function User() {
  return (
    <div>
      <main className={cx(styles.content)}>
        <h1>Info Customers</h1>
        <div className={cx(styles.grid)}>
          <div className={cx(styles.profile)}>
            <img src="person.png" className={cx(styles.avatar)} alt="person" />
            <p><b>Name:</b> A</p>
            <p><b>Age:</b> 25</p>
            <p><b>Email:</b> 123@gmail.com</p>
            <p><b>Phone:</b> 938822</p>
            <p><b>ID:</b> 12345678</p>
            <div className={cx(styles.buttons)}>
              <button>Motorbike</button>
              <button>Mobile Phone</button>
              <button>Gold</button>
              <button>History</button>
            </div>
          </div>

          <div className={cx(styles.items)}>
            <div className={cx(styles.card)}>
              <img src="vision.png" alt="vision" />
              <p className={cx(styles.title)}>Honda Vision 150i</p>
              <p>14 million VND</p>
              <p className={cx(styles.price)}>$0</p>
            </div>
            <div className={cx(styles.card)}>
              <img src="iphone.png" alt="iphone" />
              <p className={cx(styles.title)}>iPhone 14</p>
              <p>13 million VND</p>
              <p className={cx(styles.price)}>$0</p>
            </div>
            <div className={cx(styles.card)}>
              <img src="vision.png" alt="elegant" />
              <p className={cx(styles.title)}>Honda Elegant 110</p>
              <p>10 million VND</p>
              <p className={cx(styles.price)}>$0</p>
            </div>
          </div>

          <div className={cx(styles.detail)}>
            <img src="vision.png" alt="detail" />
            <p><b>Name:</b> A</p>
            <p><b>Price:</b> 14 million VND</p>
            <p><b>Holding Days:</b> 1-1-1</p>
            <p><b>Pick Up Date:</b> 5-1-1</p>
            <p><b>Holder:</b> A</p>
            <p><b>Type:</b> Xe Vision</p>
            <p><b>Expired on:</b> 4 days</p>
          </div>
        </div>
      </main>
    </div>
  );
}
