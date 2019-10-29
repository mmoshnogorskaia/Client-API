import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MainPageRoutingModule,
    ChartsModule
  ],
})
export class MainPageModule { }
