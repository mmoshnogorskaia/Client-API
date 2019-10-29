import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ChartsModule
  ],
})
export class MainPageModule { }
