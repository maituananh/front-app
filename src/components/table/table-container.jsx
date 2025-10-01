import styles from '../../css/components/Table.module.css';
import cx from 'classnames';

function TableContainer(props) {
  return (
    <table className={cx(styles['table-container'])}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user.cardId}>
              <td>{user.cardId}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableContainer;
