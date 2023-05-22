import { Role } from './role';

export class User {
  constructor() {
    this.userId = '';
    this.username = '';
    this.password = '';
    this.email = '';
    this.role = new Role();
  }
  userId: string;
  username: string;
  password: string;
  email: string;
  role: Role;
}
