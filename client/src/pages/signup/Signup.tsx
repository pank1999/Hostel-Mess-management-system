import { Button } from '@mui/material';
import './Signup.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../schema/signup.schema';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './../../assets/Bg.jpg';
export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const onFormSubmit = async (data: any) => {
    console.log(data);
    try {
      await Axios.post(`http://localhost:3001/user/register`, {
        ...data,
        role: 'admin',
      })
        .then((res) => {
          console.log(res.data);
          navigate('/Login');
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="wrapper">
      <div className="title">
        <h2>Register</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input
            className="field"
            type="text"
            placeholder="name"
            {...register('name')}
          />
          {/* <>{errors.name?.message}</> */}
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
            style={{ width: '75%', height: '50px', borderRadius: '50px' }}
          >
            Submit
          </Button>
          <p>
            Already have an account ?{' '}
            <Link to="/Login" style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
