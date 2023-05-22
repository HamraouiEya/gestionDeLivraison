import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountServiceService} from "../../Services/account-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cree-compte',
  templateUrl: './cree-compte.component.html',
  styleUrls: ['./cree-compte.component.css']
})
export class CreeCompteComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private accountService:AccountServiceService,private router: Router,) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.accountForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', Validators.required],
      confirmation: ['', Validators.required]
    });
  }
  addNewUser() {
    if (this.accountForm.invalid) {
      return;
    }

    const { username, password, email, confirmPassword } = this.accountForm.value;

    this.accountService.addNewUser(username, password, email, confirmPassword)
      .subscribe(
        (response) => {
          alert('New user added')
          this.router.navigate(['/LogIn']).then(() => window.location.reload());
        },
        (error) => {
          alert("username exist")
        }
      );
  }
}
