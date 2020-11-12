import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import IUser from 'src/app/models/user.interface';
import IFormItem from '../../models/form-item.interface';
import { PasswordValidationService } from 'src/app/validators/password-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginItems: Array<IFormItem> = [
    {
      id: '',
      label: '',
      type: '',
    },
  ];
  user: IUser;

  constructor(
    private readonly formBuilder: FormBuilder,
    private passwordValidator: PasswordValidationService
  ) {
    this.loginItems = [
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
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      ],
      password: [
        null,
        Validators.compose([Validators.required, this.passwordValidator.patternValidator()]),
      ],
    });
  }
  onLoginSubmit(): void {
    console.log(this.user);
    this.loginForm.reset();
  }
}
