import * as yup from 'yup';

export const registerValidation = yup.object().shape({
  fullName: yup.string().max(30).required('Please enter your full name'),
  userName: yup.string().max(30).required('Please enter your name'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(30)
    .required('Please enter your password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .min(6, 'Password must be at least 6 characters')
    .max(30)
    .label('Confirm password')
    .required('Please confirm your password'),
});
