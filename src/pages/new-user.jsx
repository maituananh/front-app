import { useForm } from 'react-hook-form';
import styles from '../css/AddUser.module.css';
import cx from 'classnames';
import dataService from '../service/dataService';
import { apis } from '../route/apis';
import { useNavigate } from 'react-router-dom';

export default function NewUserForm() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await dataService.post(apis.user.addUser, data);

    navigate('/users');
  };

  return (
    <div className={cx(styles.newPersonContainer)}>
      <div className={cx(styles.avatar)}>
        <img src="vite.svg" alt="user avatar" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={cx(styles.personForm)}>
        <input {...register('cardId')} type="text" placeholder="Id" />
        <input {...register('email')} type="text" placeholder="Email" />
        <input {...register('name')} type="text" placeholder="Name" />
        <input {...register('age')} type="number" placeholder="Age" />
        <input {...register('phone')} type="text" placeholder="Phone" />

        <button className={cx(styles.formActions)}>Create</button>
      </form>
    </div>
  );
}
