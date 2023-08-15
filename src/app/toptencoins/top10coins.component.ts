import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../service/apicalls.service';

@Component({
  selector: 'app-industry',
  templateUrl: './top10coins.component.html',
  styleUrls: ['./top10coins.component.css']
})
export class TopTenComponent implements OnInit {

  // top 10 coins 
  coinData: any[] = [];
  // top 10 nfts
  nftList: any[] = [];
  nftData: any[] = [];
  // top 10 exchanges
  exchangeData: any[] =[];
  // table sizing
  size: any = { 
    name: 'Small', class: 'p-datatable-sm' 
  };
  // display colors
  value: number = 0;

  constructor(
    private authService : ApiCallsService){
  }

  ngOnInit(){
    this.getTop10Coins();
    this.getTop10NFTS();
    this.getTop10Exchanges();
  }

  getTop10Coins() {
    this.authService.queryForTop10Coins().subscribe((res) => {
      for (let i = 0; i <= 9; i++) {
        this.coinData.push({
          id: res[i].id,
          logo: res[i].image,
          marketCapRank: res[i].market_cap_rank,
          marketCap: res[i].market_cap,
          marketCap24hrChange: res[i].market_cap_change_percentage_24h.toFixed(2),
          price: res[i].current_price.toFixed(2),
          priceLow: res[i].low_24h.toFixed(2),
          priceHigh: res[i].high_24h.toFixed(2),
          priceChange: res[i].price_change_percentage_24h.toFixed(2)
        });
      }
    });
  }

  getTop10NFTS(){
    this.authService.queryForTop10NFTSList().subscribe( res=>{
      for (let i = 0; i <= 9; i++) {
        this.nftList.push({
          id: res[i].id,
          assetPlatformId: res[i].asset_platform_id,
          symbol: res[i].symbol,
        })
      }
    })
  }

  getTop10Exchanges(){
    this.authService.queryForTop10Exchanges().subscribe( res=>{
      for (let i = 0; i <= 9; i++) {
        this.exchangeData.push({
          name: res[i].name,
          created: res[i].year_established,
          country: res[i].country,
          image: res[i].image,
          tradingVolume24hr: res[i].trade_volume_24h_btc.toFixed(2)
        })
      }
    })
  }

  isPositive(): boolean{
    return this.value>=0;
  }
}
