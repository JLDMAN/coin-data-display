import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../service/apicalls.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit{

  company: any[] =[];
  global: any[] =[];
  selectedCoin: string = '';

  // table sizing
  size: any = { 
    name: 'Small', class: 'p-datatable-sm' 
  };

  listOfPossibleCoins: any = [
    { id: 'bitcoin', display: 'Bitcoin'},
    { id: 'ethereum', display: 'Ethereum'},
  ]

  constructor(
    private apiService: ApiCallsService
  ){
  }

  ngOnInit(): void {
    this.getGlobalValues();
  }

  getCompanyData(coin: string) {
    this.apiService.queryForCompanyData(coin).subscribe(res => {
      for (let i = 0; i < res.companies.length; i++) {
        this.company.push({
          name: res.companies[i].name,
          totalHoldings: res.companies[i].total_holdings,
          percentageTotalSupply: res.companies[i].percentage_of_total_supply
        });
      }
    });
  }

  getGlobalValues(){
    this.apiService.queryForGlobalData().subscribe(res => {
      for (let i = 0; i <= 9; i++) {
        this.global = Object.keys(res.data.total_market_cap).map(item => ({
          name: item,
          percentage: parseFloat(res.data.total_market_cap[item]).toFixed(2)
        }));
        // this.global.push({
        //   totalMarketCap: res.data.total_market_cap[i],
        //   totalVolume: res.data.total_volume[i],
        //   marketCapPercentage: res.data.market_cap_percentage[i],
        // });        
      }
      // this.global.push({
      //   activeCryptocurrencies: res.data.active_cryptocurrencies,
      //   ongoingIcos: res.data.ongoing_icos,
      //   markets: res.data.markets,
      //   marketCapChange: res.data.market_cap_change_percentage_24h_usd,
      // });
    })
  }
}
