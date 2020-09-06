import { Injectable } from '@angular/core';
import { EChartOption } from 'echarts';
@Injectable({
  providedIn: 'root'
})

export class ChartService {

	chartOption: EChartOption;

	initChart(){
		console.log(11);
		this.chartOption = {
		  xAxis: {
		    type: 'category',
		    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		  },
		  yAxis: {
		    type: 'value',
		  },
		  series: [
		    {
		      data: this.getNumbers(),
		      type: 'line',
		    },
		  ],
		};
	}

	getNumbers(){
		const numbers = Array(1000).fill(0,1,1000).map((_, index) => index + 1);
		numbers.sort(() => Math.random() - 0.5);
		return numbers.slice(0, 7);
	}
}