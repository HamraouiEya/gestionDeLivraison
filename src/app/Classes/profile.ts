export class Profile {
  constructor() {
    this.authorities = [];
    this.details = { remoteAddress: '', sessionId: '' };
    this.authenticated = false;
    this.principal = {
      password: '',
      username: '',
      authorities: [],
      accountNonExpired: true,
      accountNonLocked: true,
      credentialsNonExpired: true,
      enabled: true,
    };
    this.credentials = '';
    this.name = '';
  }
  authorities: { authority: string }[];
  details: {
    remoteAddress: string;
    sessionId: string;
  };
  authenticated: boolean;
  principal: {
    password: string;
    username: string;
    authorities: { authority: string }[];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;
  };
  credentials: string;
  name: string;
}
