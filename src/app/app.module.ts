import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
