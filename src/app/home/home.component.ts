import { Component, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import {ChartService} from '../chart/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
jsonData={
	tabs:{'Tab1':{'list':['Tab 1 Selected','Please use https://valor-software.com/ngx-bootstrap/#/tabs to make the tabs design above','Please use Json Data to power the whole UI. Do not hardcode any values in HTML','You are free to use any json structure you want to use to power the UI. Keep in mind the efficient and performance','Please feel free to use colors you like, and eyeball the padding and margins, dont have to be exact for dimensions','In general please make sure the application is responsive - Dont worry about mobile phones','Please use Google Fonts - Nunito in this application and include them with the application and do not use the https link directly','For icons please use FontAwesome Icons']},
		  'Tab2':{'list':['Tab 2 Selected'],'graph':'Y'},
		  'Tab3':{'list':['Tab 3 Selected'],'button':[{name:'Return to tab1',action:'Tab1'}]}
	},
	toolBarIcn:{"5_data":{name:'data',icon:['fa fa-download','fa fa-upload','fa fa-refresh']},
				'3_calendar':{name:'calendar',icon:'fa fa-calendar',status:'active'},
				'3_filter':{name:'filter',icon:'fa fa-filter',status:'active'},
				'2_share':{name:'share',icon:'fa fa-share',status:'active'},
				'1_status':{name:'status',icon:'fa fa-heartbeat',status:'active'}},
	items:[{head:'sample item1',desc:'sample data1'},{head:'sample item2',desc:'sample data2'},{head:'sample item3',desc:'sample data3'},{head:'sample item4',desc:'sample data4'},{head:'sample item5',desc:'sample data5'},{head:'sample item6',desc:'sample data6'},{head:'sample item7',desc:'sample data7'},{head:'sample item8',desc:'sample data8'},{head:'sample item9',desc:'sample data9'},{head:'sample item10',desc:'sample data10'},{head:'sample item11',desc:'sample data11'},{head:'sample item12',desc:'sample data12'},{head:'sample item13',desc:'sample data13'},{head:'sample item14',desc:'sample data14'},{head:'sample item15',desc:'sample data15'},{head:'sample item16',desc:'sample data16'},{head:'sample item17',desc:'sample data17'},{head:'sample item18',desc:'sample data18'},{head:'sample item19',desc:'sample data19'},{head:'sample item20',desc:'sample data20'},{head:'sample item21',desc:'sample data21'},{head:'sample item22',desc:'sample data22'},{head:'sample item23',desc:'sample data23'}],
	curItem:0,
	ddList:['List Item 1','List Item 2','List Item 3'],
	ddSelName:'Sample Id, Sample Name'
}
  constructor(private ChartService:ChartService) { }

  ngOnInit(): void {
  }

  changeStatus(key:any){
  	let st= this.jsonData.toolBarIcn[key].status;
  	if(st=='active')
  		st='onSelect';
  	else if(st=='onSelect')
  		st='onOfStats';
  	else if(st=='onOfStats')
  		st='inactive';
  	else if(st=='inactive')
  		st='active';
  	this.jsonData.toolBarIcn[key].status=st;
  }

  switchTab(tabKey:String){
  	let element: HTMLElement = document.querySelector(`#${tabKey}-link`) as HTMLElement;
  	element.click();
  }
  tabClck(ky){
    if(ky=='Tab2'){
      setTimeout(()=>{
        this.ChartService.initChart()
      },0);
    }

  }
}
