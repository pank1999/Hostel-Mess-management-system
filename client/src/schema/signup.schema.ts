import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  name: yup.string().min(3).required('name is required'),
  mobileNumber: yup.number().required(),
  password: yup.string().min(5).max(20).required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), "password's must be same"])
    .required(),
});
