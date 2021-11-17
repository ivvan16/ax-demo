import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxControlComponent } from './ax-control/ax-control.component';
import { ValidationComponent } from './validation/validation.component';
import { NumberValidator } from './validators/number.validator';
import { LettersValidator } from './validators/letters.validator';


@NgModule({
  declarations: [
    AppComponent,
    AxControlComponent,
    ValidationComponent,
    NumberValidator,
    LettersValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
