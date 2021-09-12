import { Component } from '@angular/core';
import { Repas } from './repas/repas';
import { RepasService } from './repas/repas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restaurant';

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
