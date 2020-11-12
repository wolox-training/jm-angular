import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IUser from 'src/app/models/user.interface';
import IFormItem from '../../models/form-item.interface';
import { PasswordValidationService } from 'src/app/validators/password-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  user: IUser;
  signUpItems: Array<IFormItem> = [
    {
      label: '',
      type: '',
      id: '',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private passwordValidator: PasswordValidationService
  ) {
    this.signUpItems = [
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
  }
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [
          null,
          [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
        ],
        password: [
          null,
          Validators.compose([Validators.required, this.passwordValidator.patternValidator()]),
        ],
        confirmPassword: [null, Validators.required],
      },
      {
        validator: this.passwordValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  onSignUpSubmit(): void {
    this.user = {
      first_name: this.signUpForm.value.firstName,
      last_name: this.signUpForm.value.lastName,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      password_confirmation: this.signUpForm.value.passwordConfirmation,
      locale: 'en',
    };
    console.log(this.user);
    this.signUpForm.reset();
  }
}
