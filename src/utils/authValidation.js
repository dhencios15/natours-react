import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Please provide your name'),
  email: yup
    .string()
    .email('Please input valid email')
    .required('Please provide your email'),
  password: yup.string().min(8).required('Please provide your password'),
  passwordConfirm: yup.string().min(8).required('Please confirm your password'),
});
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please input valid email')
    .required('Please provide your email'),
  password: yup.string().min(8).required('Please provide your password'),
});
