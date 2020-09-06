import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import {ChartService} from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor(public ChartService:ChartService) { }

  ngOnInit(){
  
  }

}
