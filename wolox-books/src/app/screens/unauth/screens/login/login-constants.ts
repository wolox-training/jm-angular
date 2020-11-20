import IFormItem from '../../models/form-item.interface';

export const LOGIN_ITEMS: Array<IFormItem> = [
  {
    error: 'El email ingresado no coincide con ninguna cuenta.',
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    error: 'La contraseña ingresada es incorrecta.',
    id: 'password',
    label: 'Password',
    type: 'password',
  },
];
