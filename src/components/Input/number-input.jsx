import styles from '../../css/components/InputText.module.css';
import cx from 'classnames';

export default function NumberInput(props) {
  return (
    <>
      <input
        type="number"
        placeholder={props.placeholder || ''}
        className={cx(styles['input-field'])}
      />
    </>
  );
}
