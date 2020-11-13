import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Observable<boolean>;

  constructor(public userService: UserService) {
    this.isLoggedIn = userService.isLoggedIn();
  }

  ngOnInit(): void {}
}
