
import styles from "../css/UserList.module.css";
import cx from "classnames";

export default function UserList() {
  return (
    <>
      <main className={cx(styles.container)}>
        <section className={cx(styles.content)}>
          <div className={cx(styles["content-header"])}>
            <h2>Users Management</h2>
            <div className={cx(styles.actions)}>
              <input type="text" placeholder="Search Users" />
              <button className={cx(styles.btn, styles.green)}>Search</button>
              <button className={cx(styles.btn)}>Import</button>
              <button className={cx(styles.btn, styles.outline)}>New Users</button>
            </div>
          </div>

          <table className={cx(styles["user-table"])}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>123@gmail.com</td>
                <td>Nguyen</td>
                <td>A</td>
                <td>1234334</td>
                <td>25</td>
              </tr>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Holding Date</th>
                <th>Pick Up Date</th>
                <th>Price</th>
                <th>Expired On</th>
              </tr>
              <tr>
                <td>A</td>
                <td>Xe Vision</td>
                <td>1-1-1</td>
                <td>5-1-1</td>
                <td>14 Million VND</td>
                <td>4 Days</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
