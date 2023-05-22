import { Client } from './client';

export class BonLivraison {
  constructor() {
    this.code = 0;
    this.date = new Date();
    this.etat = true;
    this.bonLivClient = new Client();
  }
  code: Number;
  date: Date;
  etat: Boolean;
  bonLivClient: Client;
}
