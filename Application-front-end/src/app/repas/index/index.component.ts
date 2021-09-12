import { Component, OnInit } from '@angular/core';
import { Repas } from '../repas';
import { RepasService } from '../repas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  R: Repas[] = [];


  constructor(public repasService: RepasService) {}

  ngOnInit(): void {
    this.repasService.readAll().subscribe((data: Repas[])=>{
      this.R = data;
      console.log(this.R);
  })
  
  }

  // deleteRepas(id:any){
  //   this.repasService.delete(id,this.R).subscribe(res=>{
  //     this.R = this.R.filter(item=>item.id_repas !== id);
  //   })
  // }
}
