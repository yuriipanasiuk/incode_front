import styled from '@emotion/styled';
import { Field, Form as StyledFrom, ErrorMessage as ErrorFormicError } from 'formik';
import { Link } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export const Form = styled(StyledFrom)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  font-size: 16px;
  line-height: 1.55;
`;

export const Button = styled('button')`
  margin-bottom: 24px;
  height: 44px;
  background-color: #539713;
  color: #ffffff;
  border: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

export const LinkWraper = styled(`div`)`
  display: flex;
  justify-content: center;
`;

export const Text = styled(`p`)`
  margin-right: 4px;
  font-size: 12px;
  color: #f1f2f1;
  line-height: 1.55;
`;

export const NavLink = styled(Link)`
  font-size: 12px;
  color: #7faaf0;
  line-height: 1.55;
`;

export const Label = styled(`p`)`
  font-size: 14px;
  color: #ffffff;
`;

export const InputWraper = styled('div')`
  position: relative;
  margin-bottom: 24px;
`;

export const InputWraperLast = styled('div')`
  position: relative;
  margin-bottom: 32px;
`;

export const ShowIcon = styled(BsEye)`
  color: #ffffff;
`;

export const HideIcon = styled(BsEyeSlash)`
  color: #ffffff;
`;

export const IconWraper = styled('div')`
  position: absolute;
  right: 0px;
  top: 10px;
`;

export const ErrorMessage = styled(ErrorFormicError)`
  position: absolute;
  color: red;
  top: 50px;
  left: 0px;

  font-size: 12px;
`;
