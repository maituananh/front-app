import styles from '../css/Layout.module.css';
import cx from 'classnames';
import Sidebar from './sidebar';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <div className={cx(styles.logo)}>🍀 Pawn Service </div>
        <div className={cx(styles['search-bar'])}>
          <input type="text" placeholder="Search product" />
          <button> Search </button>
        </div>
      </header>

      <nav>
        <div className={cx(styles.menu)}>
          <Link to="/home">Home</Link>
          <Link to="/new-product">New Item</Link>
          <Link to="/new-user">New User</Link>
          <Link to="/users">Manage User</Link>
          <Link to="/system-info">Service Information</Link>
          <Link to="/contact">Contact Us</Link>
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
