import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../../services/weather-api.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit() {
    this.weatherService.getData().subscribe(res=>console.log(res));
  }

}
