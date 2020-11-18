import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUserCredentials } from 'src/app/models/user.interface';
import { PasswordValidationService } from 'src/app/validators/password-validation.service';
import { LOGIN_ITEMS } from './login-constants';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../unauth.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginItems = LOGIN_ITEMS;
  credentials: IUserCredentials;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private passwordValidator: PasswordValidationService,
    private router: Router,
    private userService: UserService
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
    this.credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.userService.login(this.credentials).subscribe((accessToken) => {
      this.loginForm.reset();
      this.router.navigate(['/books'], { relativeTo: this.activatedRoute.parent });
    });
  }
}
