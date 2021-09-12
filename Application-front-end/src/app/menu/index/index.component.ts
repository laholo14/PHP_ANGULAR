import { Component, OnInit } from '@angular/core';
import { Repas } from 'src/app/repas/repas';
import { RepasService } from 'src/app/repas/repas.service';

@Component({
  selector: 'app-menu-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  R: Repas[] = [];

  constructor
  (

    public repasService: RepasService,

  ) { }


  ngOnInit(): void {

    this.repasService.readAll().subscribe((data: Repas[])=>{
      this.R = data;

    })


  }
}
