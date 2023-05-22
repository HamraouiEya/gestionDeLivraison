export class Commande {
  constructor() {
    this.idc = 0;
    this.DateCommande = new Date();
    this.userId = '';
    this.prixTotale = 0;
  }
  idc: Number;
  DateCommande: Date;
  userId: String;
  prixTotale: Number;
}
