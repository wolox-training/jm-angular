import IFormItem from '../../models/form-item.interface';

export const SIGN_UP_ITEMS: Array<IFormItem> = [
  {
    label: 'Nombre',
    error: 'Ingrese su nombre.',
    type: 'text',
    id: 'firstName',
  },
  {
    label: 'Apellido',
    error: 'Ingrese su apellido.',
    type: 'text',
    id: 'lastName',
  },
  {
    label: 'Email',
    error: 'Ingrese un email valido.',
    type: 'email',
    id: 'email',
  },
  {
    label: 'Password',
    error: 'La contraseña debe tener al menos 8 caracteres, con una mayuscula y un numero.',
    type: 'password',
    id: 'password',
  },
  {
    label: 'Confirmacion de Password',
    error: 'Las contraseñas no coinciden.',
    type: 'password',
    id: 'confirmPassword',
  },
];
