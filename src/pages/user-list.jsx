import { useEffect, useState } from 'react';
import { TableContainer } from '../components';
import styles from '../css/UserList.module.css';
import cx from 'classnames';
import dataService from '../service/dataService';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      return await dataService.get('/users');
    };

    fetchUsers().then((res) => setUsers(res));
  }, []);

  return (
    <>
      <main className={cx(styles.container)}>
        <section className={cx(styles.content)}>
          <div className={cx(styles['content-header'])}>
            <h2>Users Management</h2>
            <div className={cx(styles.actions)}>
              <input type="text" placeholder="Search Users" />
              <button className={cx(styles.btn, styles.green)}>Search</button>
              <button className={cx(styles.btn)}>Import</button>
              <button className={cx(styles.btn, styles.outline)}>
                New Users
              </button>
            </div>
          </div>
          <TableContainer users={users} />
        </section>
      </main>
    </>
  );
}
