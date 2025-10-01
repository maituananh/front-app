import styles from '../../css/components/FormSubmit.module.css';
import cx from 'classnames';

export default function FormSubmit({ children }) {
  return <form className={cx(styles['form-container'])}>{children}</form>;
}
