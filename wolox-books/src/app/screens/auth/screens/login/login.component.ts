import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFullUser } from 'src/app/models/user.interface';
import { PasswordValidationService } from 'src/app/validators/password-validation.service';
import { LOGIN_ITEMS } from './login-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../auth.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginItems = LOGIN_ITEMS;
  user: IFullUser;

  constructor(
    private readonly formBuilder: FormBuilder,
    private passwordValidator: PasswordValidationService
  ) {}

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