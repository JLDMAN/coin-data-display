import { Component, Input, OnInit, OnChanges, SimpleChanges   } from '@angular/core';
import { ApiCallsService } from '../../service/apicalls.service';
import { ChartConfiguration} from 'chart.js';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-trend-chart',
  templateUrl: './trend-chart.component.html',
  styleUrls: ['./trend-chart.component.css']
})
export class TrendChartComponent implements OnInit, OnChanges {

  @Input() id: any;

  chartPeriod: number | undefined; // Define the chartPeriod property
  typeOfMarket: any[] = [
    {label: 'Market Cap', value: 'market_caps'}, 
    {label: 'Price per Unit', value: 'prices'}    
  ];

  // chart type
  public lineChartData!: ChartConfiguration['data'];  
  timeValues: any[] = [];
  priceValues: any[] = [];
  marketCapValues: any[] = [];
  showChart: boolean = false;
  trendTypeSelect: FormGroup;
  selectedOption: string = '';

  constructor(
    private service: ApiCallsService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {
    this.trendTypeSelect = this.formBuilder.group({
      trendType:''
    });

    this.chartPeriod = this.periodOptions[0].value;
  }

  periodOptions: any[] = [
    { name: '24hr', value: 1 },
    { name: 'week', value: 7 },
    { name: 'month', value: 28 },
    { name: 'year', value: 365 }
  ];

  ngOnInit():void {
    // set market value display defualt
    this.trendTypeSelect.patchValue({
      trendType: 'prices'
    });
    // draw chart
    this.getChartValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      // draw chart
      this.getChartValues();
    }
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
      x: {
      grid: {
        display: false // Hide grid lines for the x-axis
      }
      },
      //left axxis
      y: {
        // no minimum value as our distribution values are very low
        type: 'linear',
        display: true,
        position: 'left',
        beginAtZero: false, // Set beginAtZero to false
        grid: {
          display: false // Hide grid lines for the x-axis
        }
      },
    },
  }

  getChartValues():void {
    this.timeValues = [];
    this.priceValues = [];
    this.selectedOption = this.trendTypeSelect.value.trendType;

    // console.log("id value: " + this.id);
    // console.log("period in days: " + this.chartPeriod);
    // console.log("presentation type: " + this.selectedOption);

    if (this.id && this.chartPeriod) {
      this.service.queryTrendData(this.id, this.chartPeriod).subscribe(res => {
        for (let i = 0; i < res.prices.length; i++) {
          // date format from seconds
          const timestamp = res.prices[i][0] / 1000; // Convert milliseconds to seconds
          const date = new Date(timestamp * 1000)
          // date format to readable time
          const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy', 'en-GB');
          this.timeValues.push(formattedDate);
          // price/market cap of coin
          this.priceValues.push(res[this.selectedOption][i][1]);
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
          label: "Value (USD)",
          backgroundColor: [
            'rgba(211, 211,211, 0.8)'
          ],
          borderColor: 'rgba(80,122,189,1)',
          borderWidth: 1,
          pointRadius: [], // Empty array to remove circles from all points
          pointHoverRadius: 4,
          fill: 'origin',
          type: 'line',
          yAxisID: 'y',
        }
      ],
      // x-axis values
      labels: this.timeValues
    }
  }
}
