import { Component, OnInit } from '@angular/core';
import {AccountServiceService} from "../../../Services/account-service.service";
import {User} from "../../../Classes/user";

@Component({
  selector: 'app-gestion-livreurs',
  templateUrl: './gestion-livreurs.component.html',
  styleUrls: ['./gestion-livreurs.component.css']
})
export class GestionLivreursComponent implements OnInit {
  users!: User[];
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

}
