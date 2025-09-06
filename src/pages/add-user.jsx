import styles from "../css/AddUser.module.css";
import cx from "classnames";

export default function NewPersonForm() {
  return (
    <div className={cx(styles.newPersonContainer)}>
      <div className={cx(styles.avatar)}>
        <img
          src="vite.svg"
          alt="user avatar"
        />
      </div>

      <form className={cx(styles.personForm)}>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Age" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Id" />
        <input type="text" placeholder="Type" />

        <div className={cx(styles.formActions)}>
          <button type="button">Next</button>
          <button type="button">Update</button>
          <button type="button">Delete</button>
        </div>
      </form>
    </div>
  );
}