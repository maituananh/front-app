import styles from "../css/Layout.module.css";
import cx from "classnames";
import Sidebar from "./sidebar";

function Layout({ children }) {
  return (
    <>
      <header>
        <div className={cx(styles.logo)}>🍀 Pawn Service </div>
        <div className={cx(styles["search-bar"])}>
          <input type="text" placeholder="Search.........." />
          <button> Search </button>
        </div>
      </header>

      <nav>
        <div className={cx(styles.menu)}>
          <a href="#">Home</a>
          <a href="#">New Person</a>
          <a href="#">Pledged Items</a>
          <a href="#">Liquidated Items</a>
          <a href="#">Service Information</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={cx(styles.phone)}> 📞 xxx-xxxx-xxx </div>
      </nav>

      <Sidebar>
        {children}
      </Sidebar>
    </>
  );
}

export default Layout;
