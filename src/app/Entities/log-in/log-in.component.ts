import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/Services/account-service.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: AccountServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      email: [
        '',
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"'),
      ],
      password: ['', [Validators.required]],
    });
  }
  public get email() {
    return this.loginForm.get('email');
  }
  public get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.email !== null && this.password !== null) {
      const userEmail = this.email.value;
      const passwordEmail = this.password.value;
      this.userService.authenticate(userEmail, passwordEmail).subscribe(
        (token) => {
          localStorage.setItem('user', token);
          this.userService.getProfile().subscribe(
            (response) => {
              const { authorities } = response;
              const { authority } = authorities[0];
              console.log(authority);
            },
          );
          this.router.navigate(['/home']).then(() => window.location.reload());
        },
        (error) => {
          alert("Invalid username or password")
        }
      );
    }
  }
}
