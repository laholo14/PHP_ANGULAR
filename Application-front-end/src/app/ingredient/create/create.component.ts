import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Repas } from 'src/app/repas/repas';
import { RepasService } from 'src/app/repas/repas.service';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form_create_Ing: FormGroup;

  R: Repas[] = [];

  constructor(
    public ingredientService: IngredientService,
    public repasService: RepasService,
    private router: Router
  ) { }

  ngOnInit(): void {

  this.form_create_Ing = new FormGroup({
    
    id_repas:new FormControl('',[Validators.required, Validators.pattern("^[0-9-.]*$")]),
    nom_ingredient: new FormControl('',[ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    prix_ing: new FormControl('',[Validators.required, Validators.pattern("^[0-9-.]*$")]),
    qte_ilaina_ing: new FormControl('',[Validators.required, Validators.pattern("^[0-9-.]*$")]),
    stock: new FormControl('',[Validators.required, Validators.pattern("^[0-9-.]*$")]),


  })

  this.repasService.readAll().subscribe((data: Repas[])=>{
      this.R = data;
      console.log(this.R);
  })

  }

  get formulaireIng(){
  return this.form_create_Ing.controls;
  }


  createIng(){
    this.ingredientService.createIngredient(this.form_create_Ing.value).subscribe(res=>{
      this.router.navigateByUrl('ingredient/index');
    })

  }
}


