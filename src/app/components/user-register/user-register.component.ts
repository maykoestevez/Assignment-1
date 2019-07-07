import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user: User;
  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  register() {
    const userString = JSON.stringify(this.user);
    alert(`User was created successfully ${userString}`);
  }

}
