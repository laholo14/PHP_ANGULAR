import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Repas } from '../repas';
import { RepasService } from '../repas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  R: Repas[] = [];
  form_create_repas: FormGroup ;

  constructor(
    public repasService: RepasService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form_create_repas = new FormGroup({
      nom_repas: new FormControl('',[ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      prix: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")])
    })


  }

  get formulaire(){
    return this.form_create_repas.controls;
  }

  createRepas(){
    console.log(this.form_create_repas.value);
    this.repasService.createTest(this.form_create_repas.value).subscribe(res=>{
      console.log("Repas ajouter");
       this.router.navigateByUrl('ingredient/create');
    })
  }

}
