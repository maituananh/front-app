import styles from "../css/Layout.module.css";
import cx from "classnames";
import Sidebar from "./sidebar";
import {Link, Outlet } from "react-router-dom";

function Layout() {
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
          <Link to="/add-user">New Person</Link>
          <a href="#">Pledged Items</a>
          <a href="#">Liquidated Items</a>
          <a href="#">Service Information</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={cx(styles.phone)}> 📞 xxx-xxxx-xxx </div>
      </nav>

      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
}

export default Layout;
