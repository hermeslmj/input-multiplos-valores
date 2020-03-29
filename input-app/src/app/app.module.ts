import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputBootstrapComponent } from './input-bootstrap/input-bootstrap.component';
import { SomenteNumerosDirective } from './diretivas/somente-numeros.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputBootstrapComponent,
    SomenteNumerosDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    InputBootstrapComponent
  ]
})
export class AppModule { }
