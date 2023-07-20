import { Component, Input, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ApiCallsService } from '../service/apicalls.service';
import { ChartConfiguration} from 'chart.js';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trend-chart',
  templateUrl: './trend-chart.component.html',
  styleUrls: ['./trend-chart.component.css']
})
export class TrendChartComponent implements OnInit {

  @Input() id: any;
  chartPeriod: any;

  // chart type
  public lineChartData!: ChartConfiguration['data'];
  
  timeValues: any[] = [''];
  priceValues: any[] = [''];
  marketCapValues: any[] = [''];
  showChart: boolean = false;

  constructor(
    private service: ApiCallsService,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit():void {
    this.chartPeriod = 7;
    this.getChartValues();
  }

  // chart properties
  styledChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins:
    {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {},
      //left axxis
      y: {
        // no minimum value as our distribution values are very low
        type: 'linear',
        display: true,
        position: 'left',
        beginAtZero: false, // Set beginAtZero to false
      },
      // right axxis
      y1: {
        type: 'linear',
        display: false,
        position: 'right',
        beginAtZero: false,
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  }

  getChartValues():void {
    // console.log("coin name: " + this.id);
    // console.log("chart period: " + this.chartPeriod)
    this.timeValues = [];
    this.priceValues = [];

    if (this.id && this.chartPeriod) {
      this.service.queryTrendData(this.id, this.chartPeriod).subscribe(res => {
        for (let i = 0; i < res.prices.length; i++) {
          // date format from seconds
          const timestamp = res.prices[i][0] / 1000; // Convert milliseconds to seconds
          const date = new Date(timestamp * 1000)
          // date format to readable time
          const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy', 'en-GB');
          this.timeValues.push(formattedDate);
          // price of coin
          this.priceValues.push(res.prices[i][1]);
        }
        this.drawChart();
      })
    } else {
      console.log("nothing recieved");
    }
  }

  drawChart() {
    // draw chart
    this.lineChartData = { // total number of exports
      datasets: [
        {
          // y-axis values
          data: this.priceValues,
          label: "Price",
          backgroundColor: 'rgb(211,228,245)',
          borderColor: 'rgba(148,159,177,1)',
          borderWidth: 1,
          pointRadius: [], // Empty array to remove circles from all points
          pointHoverRadius: 4,
          fill: 'origin',
          type: 'line'
        },
      ],
      // x-axis values
      labels: this.timeValues
    }
  }
}
