import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  userName: yup.string().max(30).required('Please enter your name'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(30)
    .required('Please enter your password'),
});
