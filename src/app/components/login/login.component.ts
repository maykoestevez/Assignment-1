import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

// Default user
const userName = 'Mayko';
const password = '123';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    if (this.user.userName !== 'mayko' || this.user.password !== '123') {
      alert('User is not valid');
      return;
    }
    this.router.navigate(['/home']);
  }

}
