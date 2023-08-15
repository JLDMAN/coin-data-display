import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiCallsService } from '../../service/apicalls.service';

interface Column {
  name: string;
  class: string;
}

@Component({
  selector: 'app-top10coins',
  templateUrl: './top10coins.component.html',
  styleUrls: ['./top10coins.component.css']
})
export class Top10coinsComponent {

  @Input() id: string = '';
  coindata: any[] =[];
  name: string = '';
  percentage: number = 0;
  searchedCoins: any[] =[];
  serachedNFTS: any[] =[];
  icons:any[] =[];
  sizes!: Column[];

  constructor(
    private service: ApiCallsService
  ) {
  }

  ngOnInit(): void {
    this.top10Data();
    // this.topSearchedCoins();

    this.sizes = [
      { name: 'Small', class: 'p-datatable-sm' },
    ]
  }

  top10Data() {
    if (this.coindata.length <= 0){
      this.service.queryForMarketValue().subscribe(res => {
        this.coindata = Object.keys(res.data.market_cap_percentage).map(item => ({
          name: item,
          percentage: parseFloat(res.data.market_cap_percentage[item]).toFixed(2)
        }));
        // console.log(this.coindata);
      });
    }else{
    }
  }

  topSearchedCoins(){
    this.service.queryForMostSearched().subscribe(res =>{
      for(let i = 0; i <= 6; i ++){
        if (res.coins[i]?.item?.id) {
          this.coindata.push({
            searchedCoins: res.coins[i].item.id
          });
        }
      }
    });
  }

  handleImageError(event: any) {
    event.target.src = 'https://w7.pngwing.com/pngs/321/641/png-transparent-iphone-5s-ios-progress-bar-icon-load-the-map-loading-miscellaneous-tshirt-angle-thumbnail.png'; // Replace with a URL of a fallback image
    event.target.alt = 'Fallback Image'; // Add alt text for accessibility
  }
}


