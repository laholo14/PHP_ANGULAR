import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Repas } from 'src/app/repas/repas';
import { RepasService } from 'src/app/repas/repas.service';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  id: number;
  R: Repas;
  Com: Commande;
  form_create_commande: FormGroup;
  plus: any[];
  montant:any;

  constructor(
    public repasService: RepasService,
    public commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id_repas'];
    this.repasService.readById(this.id).subscribe((data: Repas) => {
      this.R = data;
    });

    this.form_create_commande = new FormGroup({
      nom_repas: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ -']+")]),
      qte: new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
      id_repas: new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
      Emballage: new FormControl('', [Validators.pattern("^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ -']+")]),
      Serviette: new FormControl('', [Validators.pattern("^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ -']+")]),
      Couvert: new FormControl('', [Validators.pattern("^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ -']+")]),
    });

    this.plus = [
      {id:1,name:"Emballage",prix:200,valeur:false},
      {id:2,name:"Serviette",prix:100,valeur:false},
      {id:3,name:"Couvert",prix:300,valeur:false},
    ];
    this.montant = 0;
  }

  get formulaireCom() {
    return this.form_create_commande.controls;
  }

  onChange(){

  }

  submitCom() {
    this.commandeService.createCommande(this.form_create_commande.value).subscribe((res) => {
      this.router.navigateByUrl('commmande/validation');
    })
  }
}
