import { Button } from '@mui/material';
import '../signup/Signup.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema } from '../../schema/Login.schema';
import { LocalStorageLoggedInUserKey } from '../../constants/constants';

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onFormSubmit = async (data: any) => {
    console.log(data);
    try {
      await Axios.post(`http://localhost:3001/user/login`, data).then((res) => {
        console.log(res.data);
        localStorage.setItem(
          LocalStorageLoggedInUserKey,
          JSON.stringify(res.data),
        );
        navigate('/Pricing');
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="wrapper">
      <div className="title">
        <h2>Login</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input
            className="field"
            type="int"
            placeholder="mobile number"
            {...register('mobileNumber')}
          />
          {/* <>{errors.mobileNumber?.message}</> */}

          <input
            className="field"
            type="password"
            placeholder="password"
            {...register('password')}
          />
          {/* <>{errors.password?.message}</> */}
          <input
            className="field"
            type="password"
            placeholder="confirm password"
            {...register('confirmPassword')}
          />
          {/* <>{errors.confirmPassword?.message}</> */}
          <Button
            type="submit"
            variant="contained"
            style={{
              width: '75%',
              height: '50px',
              borderRadius: '50px',
              marginTop: '1rem',
            }}
          >
            Submit
          </Button>
          <p>
            Don't have an account ?{' '}
            <Link to="/Signup" style={{ textDecoration: 'none' }}>
              <span>Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
