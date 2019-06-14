import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkExpCompComponent } from './comp/work-exp-comp/work-exp-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExpCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
