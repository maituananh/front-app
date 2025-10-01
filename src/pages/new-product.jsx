import { TextInput, NumberInput, FormSubmit } from '../components';
import styles from '../css/NewCustomerForm.module.css';
import cx from 'classnames';

export default function NewProductForm() {
  return (
    <div className={cx(styles['grid-container'])}>
      <div className="customer-info">
        <h2>Customer Information</h2>
        <img></img>
        <FormSubmit>
          <TextInput placeholder="Id" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Name" />
          <NumberInput placeholder="Age" />
          <TextInput placeholder="Phone" />
        </FormSubmit>
      </div>
      <div className="product-info">
        <h2>Product Information</h2>
        <img></img>
        <FormSubmit>
          <TextInput placeholder="Id" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Name" />
          <NumberInput placeholder="Age" />
          <TextInput placeholder="Phone" />
        </FormSubmit>
      </div>
    </div>
  );
}
