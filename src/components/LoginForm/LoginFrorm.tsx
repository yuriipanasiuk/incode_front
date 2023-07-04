import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';

import FormContainer from '../FormContainer/FormContainer';
import FormTitle from '../FormTitle/FormTitle';
import { ILogin } from '../../type/types';
import { loginValidation } from '../../utils/loginValidation';
import { useAppDispatch } from '../../hooks/authHook';
import { login } from '../../redux/operations';
import Logo from '../Logo/Logo';

import * as Styled from './LoginForm.styled';

const initialValue = {
  userName: '',
  password: '',
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const handleSubmit = (values: ILogin, { resetForm }: FormikHelpers<ILogin>) => {
    if (!values) {
      return;
    }
    dispatch(login(values));

    resetForm();
  };

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  return (
    <FormContainer>
      <Logo />
      <FormTitle children="Sign In" />
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={loginValidation}
      >
        <Styled.Form>
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

          <Styled.Button type="submit">Sign In</Styled.Button>

          <Styled.LinkWraper>
            <Styled.Text>Don’t have account yet?</Styled.Text>
            <Styled.NavLink to="/"> New Account</Styled.NavLink>
          </Styled.LinkWraper>
        </Styled.Form>
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
