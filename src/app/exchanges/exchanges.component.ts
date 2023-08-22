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

  marketCap: any[] =[];
  marketCapID: any[] =[];
  marketCapPercentage: any[] =[];
  marketCapPercentageID: any[] =[];

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
      for (let i = 0; i < 9; i++) {
        this.company.push({
          name: res.companies[i].name,
          totalHoldings: res.companies[i].total_holdings,
          percentageTotalSupply: res.companies[i].percentage_of_total_supply
        });
      }
    });
  }
  
  getGlobalValues() {
    this.apiService.queryForGlobalData().subscribe(res => {
      const data = res.data; // Access the 'data' object
      // Access the nested properties within 'data'
      this.marketCap = Object.values(data.total_market_cap).slice(0, 10); // Get the first 10 values
      this.marketCapPercentage = Object.values(data.market_cap_percentage).slice(0, 10); // Get the first 10 values
      // Get the ID field names from total_market_cap
      this.marketCapID = Object.keys(data.total_market_cap).slice(0, 10); // Get the first 10 keys
      this.marketCapPercentageID = Object.keys(data.market_cap_percentage).slice(0, 10); // Get the first 10 keys
    });
  }
}
