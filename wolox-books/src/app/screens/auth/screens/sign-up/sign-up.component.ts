import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFullUser } from 'src/app/models/user.interface';
import { PasswordValidationService } from 'src/app/validators/password-validation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SIGN_UP_ITEMS } from './sign-up-constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../auth.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpItems = SIGN_UP_ITEMS;
  user: IFullUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private passwordValidator: PasswordValidationService,
    private router: Router,
    private userService: UserService
  ) {}

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
      password_confirmation: this.signUpForm.value.password,
      locale: 'en',
    };
    this.userService.createUser(this.user).subscribe((response) => {
      console.log('success', response.body);
      this.signUpForm.reset();
      this.router.navigate(['/login'], { relativeTo: this.activatedRoute.parent });
    });
  }
}
