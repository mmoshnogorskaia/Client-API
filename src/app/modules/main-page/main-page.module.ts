import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { MainPageRoutingModule } from './main-page-routing.module';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
  ],
})
export class MainPageModule { }
