import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repas } from 'src/app/repas/repas';
import { RepasService } from 'src/app/repas/repas.service';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  I: Ingredient[]= [];


  constructor
  (
    public ingredientService: IngredientService


  ) { }

  ngOnInit(): void {

    this.ingredientService.readAll().subscribe((data: Ingredient[])=>{
      this.I = data;

    })



  }



}
