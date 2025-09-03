import styles from "../css/Home.module.css";
import cx from "classnames";

function Home() {
  return (
    <main className={cx(styles.content)}>
      <div className={cx(styles.items)} id="itemsList">
        <div className={cx(styles.item)}>
          <img src="vision.png" alt="Vision 150i" />
          <h3>Xe Honda Vision 150i</h3>
          <p>$200</p>
        </div>
        <div className={cx(styles.item)}>
          <img src="iphone.png" alt="Iphone 15" />
          <h3> Iphone 15</h3>
          <p>$150</p>
        </div>
        <div className={cx(styles.item)}>
          <img src="vision.png" alt="Vision 150i" />
          <h3>Xe Honda Vision 150i</h3>
          <p>$200</p>
        </div>
        <div className={cx(styles.item)}>
          <img src="vision.png" alt="Vision 150i" />
          <h3>Xe Honda Vision 150i</h3>
          <p>$200</p>
        </div>
        <div className={cx(styles.item)}>
          <img src="vision.png" alt="Vision 150i" />
          <h3>Xe Honda Vision 150i</h3>
          <p>$200</p>
        </div>
        <div className={cx(styles.item)}>
          <img src="vision.png" alt="Vision 150i" />
          <h3>Xe Honda Vision 150i</h3>
          <p>$200</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
