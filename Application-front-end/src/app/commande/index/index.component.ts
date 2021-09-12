import { Component, OnInit } from '@angular/core';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  COM: Commande[] = [];

  constructor(public commandeService: CommandeService) {}

  ngOnInit(): void {
    this.commandeService.readAll().subscribe((data: Commande[]) => {
      this.COM = data;
    });
  }
}
