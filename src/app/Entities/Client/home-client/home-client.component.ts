import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/Classes/commande';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css'],
})
export class HomeClientComponent implements OnInit {
  commande!: Commande[];
  showCommentModal = false;
  commentText = '';
  selectedCommander!: Commande;
  constructor() {}

  ngOnInit(): void {}
}
