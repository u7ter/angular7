import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User|null;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  get isUser() {
    return this.currentUser || null;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
