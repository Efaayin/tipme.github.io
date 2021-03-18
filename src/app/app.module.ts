import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateTipComponent } from './calculate-tip/calculate-tip.component';
import { DisplayTipComponent } from './display-tip/display-tip.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateTipComponent,
    DisplayTipComponent
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
