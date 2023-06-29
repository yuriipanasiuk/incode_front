import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';

import FormContainer from '../FormContainer/FormContainer';
import FormTitle from '../FormTitle/FormTitle';
import { IRegister } from '../../type/types';
import { registerValidation } from '../../utils/registerValidation';
import Logo from '../Logo/Logo';
import { useAppDispatch } from '../../hooks/authHook';
import { register } from '../../redux/operations';
import * as Styled from './RegisterForm.styled';

const initialValue = {
  fullName: '',
  userName: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(true);
  const [inputConfirmType, setInputConfirmType] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const handleSubmit = async (values: IRegister, { resetForm }: FormikHelpers<IRegister>) => {
    if (!values) {
      return;
    }

    dispatch(register(values));

    resetForm();
  };

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  const onShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
    setInputConfirmType(prevState => !prevState);
  };

  return (
    <FormContainer>
      <Logo />
      <FormTitle children="Sign Up" />
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={registerValidation}
      >
        <Styled.Form>
          <Styled.InputWraper>
            <Styled.Label>Full Name</Styled.Label>
            <Styled.Input type="text" name="fullName" />
            <Styled.ErrorMessage component="span" name="fullName" />
          </Styled.InputWraper>

          <Styled.InputWraper>
            <Styled.Label>User name</Styled.Label>
            <Styled.Input type="text" name="userName" />
            <Styled.ErrorMessage component="span" name="userName" />
          </Styled.InputWraper>

          <Styled.InputWraper>
            <Styled.Label>Password</Styled.Label>
            <Styled.Input name="password" type={inputType ? 'password' : 'text'} />

            <Styled.IconWraper>
              {showPassword ? (
                <Styled.ShowIcon onClick={onShowPassword} size={22} />
              ) : (
                <Styled.HideIcon onClick={onShowPassword} size={22} />
              )}
            </Styled.IconWraper>
            <Styled.ErrorMessage component="span" name="password" />
          </Styled.InputWraper>

          <Styled.InputWraperLast>
            <Styled.Label>Confirm Password</Styled.Label>
            <Styled.Input type={inputConfirmType ? 'password' : 'text'} name="confirmPassword" />
            <Styled.IconWraper>
              {showConfirmPassword ? (
                <Styled.ShowIcon onClick={onShowConfirmPassword} size={22} />
              ) : (
                <Styled.HideIcon onClick={onShowConfirmPassword} size={22} />
              )}
            </Styled.IconWraper>
            <Styled.ErrorMessage component="span" name="confirmPassword" />
          </Styled.InputWraperLast>

          <Styled.Button type="submit">Sign Up</Styled.Button>

          <Styled.LinkWraper>
            <Styled.Text>I have an account.</Styled.Text>
            <Styled.NavLink to="/login">Go to Sign in</Styled.NavLink>
          </Styled.LinkWraper>
        </Styled.Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
