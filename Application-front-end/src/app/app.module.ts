import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepasModule } from './repas/repas.module';
import { HttpClientModule } from '@angular/common/http';
import { IngredientModule } from './ingredient/ingredient.module';
import { CommandeModule } from './commande/commande.module';

import { CreateComponent } from './commande/create/create.component';
import { ValidationComponent } from './commande/validation/validation.component';
import { IndexComponent } from './commande/index/index.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RepasModule,
    IngredientModule,
    CommandeModule,
    MenuModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
