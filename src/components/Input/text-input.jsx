import styles from '../../css/components/InputText.module.css';
import cx from 'classnames';

export default function TextInput(props) {
  return (
    <>
      <input
        type="text"
        value={props.value || ''}
        placeholder={props.placeholder || ''}
        className={cx(styles['input-field'])}
      />
    </>
  );
}
