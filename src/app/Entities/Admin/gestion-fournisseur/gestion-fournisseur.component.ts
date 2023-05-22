import { Component, OnInit } from '@angular/core';
import {User} from "../../../Classes/user";
import {AccountServiceService} from "../../../Services/account-service.service";

@Component({
  selector: 'app-gestion-fournisseur',
  templateUrl: './gestion-fournisseur.component.html',
  styleUrls: ['./gestion-fournisseur.component.css']
})
export class GestionFournisseurComponent implements OnInit {
  users!: User[];
  username!: string;
  constructor(private accountService:AccountServiceService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.accountService.getAllUsers()
      .subscribe(users => {
        this.users = users;
        console.log(this.users); // Do something with the users data
      }, error => {
        console.error(error); // Handle error if any
      });
  }
  deleteUser(username: string) {
    this.accountService.deleteUser(username).subscribe(
      () => {
        alert('User deleted successfully.');
        location.reload()
      },
      error => {
        console.log('Error deleting user:', error);
      }
    );
  }
  getUserByUsername(username: string): void {
    this.accountService.loadUserByUsername(username)
      .subscribe((user: User) => {
        this.users = []
        this.users.push(user)
      });
  }
}
