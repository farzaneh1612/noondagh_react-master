import React from 'react';
import {atom} from 'recoil';

export const currentContactState = atom({
  key: 'currentContactState',
  default: 1,
});
export const firstNameState = atom({
  key: 'firstName',
  default: 'فرزانه',
});
export const lastNameState = atom({
  key: 'lastName',
  default: 'نعلچی',
});
export const passwordState = atom({
  key: 'password',
  default: '1250325234',
});
export const emailState = atom({
  key: 'email',
  default: 'test@gmail.com',
});
export const phoneState = atom({
  key: 'phone',
  default: '09130399066',
});
