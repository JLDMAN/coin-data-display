import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiCallsService } from '../../service/apicalls.service';

@Component({
  selector: 'app-top10coins',
  templateUrl: './top10coins.component.html',
  styleUrls: ['./top10coins.component.css']
})
export class Top10coinsComponent {

  @Input() id: string = '';
  data: any[] =[];
  name: string = '';
  percentage: number = 0;

  constructor(
    private service: ApiCallsService
  ) {
  }

  ngOnInit(): void {
    this.top10Data();
  }

  ngOnChanges(): void {
    this.top10Data();
  }

  top10Data() {
    // Initialize the data array before using it
    this.data = [];
  
    // get global rank and images
    this.service.queryForMarketValue().subscribe(res => {
      // for (let item in res.data.market_cap_percentage) {
      //   this.data.push({
      //     name: item,
      //     percentage: res.data.market_cap_percentage[item]
      //   });
      // }
      for (let i = 0; i <10; i ++) {
        this.data.push({
          name: res.data.market_cap_percentage[i],
          percentage: res.data.market_cap_percentage[res.data.market_cap_percentage][i]
        });
      }
    });

    this.service.queryForMarketValue().subscribe(res => {
      for (let item in res.data.market_cap_percentage) {
        this.data.push({
          name: item,
          percentage: res.data.market_cap_percentage[item].toFixed(2)
        });
      }
    });
  }
}
