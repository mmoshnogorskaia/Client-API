import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MainPageRoutingModule } from './modules/main-page/main-page-routing.module';
import { MainPageModule } from './modules/main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageRoutingModule,
    SharedModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
