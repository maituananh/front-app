import styles from "../css/Sidebar.module.css";
import cx from "classnames";

function Sidebar({ children }) {
  return (
    <div className={cx(styles.container)}>
      <aside className={cx(styles.sidebar)}>
        <h2>List Items </h2>
        <ul>
          <li>Motorbike</li>
          <li>Smart Phone</li>
          <li>Phone</li>
          <li>Apple Watch</li>
        </ul>
      </aside>

      {children}
    </div>
  );
}

export default Sidebar;
