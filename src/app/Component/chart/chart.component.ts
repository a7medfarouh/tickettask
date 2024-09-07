import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'Technology-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
 options: any;
 chartTimeOption: any;
 selectedTime: any;

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.options = {
    tooltip: {
      trigger: 'axis',
      formatter: 'use {b0}: {c0} ',
    },
    xAxis: {
      type: 'category',
      // data: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [100, 120, 150, 130, 200, 170, 180, 250, 230, 190, 160, 220],
        type: 'line',
        smooth: true,
        areaStyle: {
          color: 'rgba(102, 51, 153, 0.2)',
        },
        lineStyle: {
          color: '#663399',
          width: 2,
        },
        symbol: 'none',
      },
    ],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
  };
  this.chartTimeOption = [
    {id:1, name:"سنوياَ"},
    {id:2, name:"شهرياَ"},
    {id:3, name:"يومياَ"}
  ]
}




}
