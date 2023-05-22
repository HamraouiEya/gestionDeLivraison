import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../Services/account-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean | undefined = undefined;
  Role: string = '';
  constructor(private AccountServiceService: AccountServiceService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.isLoggedIn = user !== null;
    this.AccountServiceService.getProfile().subscribe((response) => {
      const { authorities } = response;
      const { authority } = authorities[0];
      this.Role = authority;
    });
  }
  logoutUser() {
    localStorage.removeItem('user');
  }
}
