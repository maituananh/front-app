import styles from '../css/Login.module.css';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import dataService from '../service/dataService';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { apis } from '../route/apis';
import { getCurrentUser } from '../utils/jwt-utils';
import AuthContext from '../providers/authProvider';

function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, []);

  const onSubmit = async (data) => {
    localStorage.clear();

    const token = await dataService.post(apis.auth.login, data);

    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);

    const currentUser = getCurrentUser();

    setUser({ id: currentUser.sub, username: currentUser.sub });

    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cx(styles['login-container'])}>
        <h1 className={cx(styles['logo'])}> 🍀 Login Pawn Shop </h1>

        <div className={cx(styles['title'])}> Email </div>
        <div className={cx(styles['input-box-email'])}>
          <input
            {...register('username')}
            type="text"
            placeholder="Email Address"
          />
        </div>

        <div className={cx(styles['title'])}> Password </div>
        <div className={cx(styles['input-box-password'])}>
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className={cx(styles['options'])}>
          <label>
            <input type="checkbox" /> Remember me{' '}
          </label>
          <a href="#"> Forgot Password </a>
        </div>

        <button className={cx(styles['login-btn'])}> Login </button>
      </div>
    </form>
  );
}

export default Login;
