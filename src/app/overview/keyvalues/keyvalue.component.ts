import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ApiCallsService } from '../../service/apicalls.service';
@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css']
})
export class KeyvalueComponent implements OnInit, OnChanges {

  @Input()  id: string | null = '';
  @Output() imageIdChange: EventEmitter<string> = new EventEmitter<string>(); // Use @Output() to emit the imageUrl data
  
  value: number = 0;
  tradingVolume24h: number = 0;
  change: number = 0;
  showValues: boolean = false;
  rank: string='';
  cap: string='';
  symbol: string = '';
  high: number = 0;
  low: number = 0;
  circulating_supply: number = 0;
  totalSupply: number = 0;
  maxSupply: number = 0;
  ath: number = 0;
  ath_change: number = 0;
  ath_date: string = '';
  imageId: string = '';
  marketCapChange: number = 0;
  marketCap: number = 0;

  constructor(
    private service: ApiCallsService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("id recieved in key values: " + this.id)
    if (changes['id'] && this.id != ''){
    this.getCurrentValues();
    // console.log("id change detection triggered");
    }
  }

  getCurrentValues() {
    const id = this.id;

    // get key values
    this.service.queryCirculatingSupply(id).subscribe(res => {
      this.value = res[0].current_price.toFixed(2);
      this.change =res[0].price_change_percentage_24h.toFixed(2);
      this.marketCap = res[0].market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      this.marketCapChange = res[0].market_cap_change_percentage_24h.toFixed(2);
      this.ath = res[0].ath.toFixed(2);
      this.ath_change = res[0].ath_change_percentage.toFixed(2);
      this.circulating_supply = res[0].circulating_supply.toFixed(2);
      this.maxSupply = res[0].max_supply;
      this.imageId = res[0].image;
      this.imageIdChange.emit(this.imageId);
    })
  }

  isPositive(): boolean{
    return this.value>=0;
  }
}
