import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PainelComponent } from './painel/painel.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TentativasComponent } from './tentativas/tentativas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PainelComponent,
    ProgressoComponent,
    TentativasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
