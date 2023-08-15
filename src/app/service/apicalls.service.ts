import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(
    private http: HttpClient,
  ) { }

  queryTrendData(id: any, expectedPeriod: any){
    const coin = id;
    const period = expectedPeriod;
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/'+coin+'/market_chart?vs_currency=usd&days='+period);
  }

  queryCirculatingSupply(id: any){
    const coin = id;
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='+coin+'&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en');
  }

  queryForMarketRank(id: any){
    return this.http.get<any>('https://api.coingecko.com/api/v3/search?query='+id);
  }

  queryForMarketValue(){
    return this.http.get<any>('https://api.coingecko.com/api/v3/global');
  }

  queryForMostSearched(){
    return this.http.get<any>('https://api.coingecko.com/api/v3/search/trending');
  }

  queryForTop10Coins(){
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en');
  }

  queryForTop10NFTSList(){
    return this.http.get<any>('https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=10&page=1');
  }

  queryForTop10NFTSProperties(nftID: any){
    const id = nftID
    return this.http.get<any>('https://api.coingecko.com/api/v3/nfts/' + id);
  }

  queryForTop10Exchanges(){
    return this.http.get<any>('https://api.coingecko.com/api/v3/exchanges')
  }

  queryForCompanyData(id: any){
    const coin = id;
    return this.http.get<any>('https://api.coingecko.com/api/v3/companies/public_treasury/' + coin);
  }

  queryForGlobalData(){
    return this.http.get<any>('https://api.coingecko.com/api/v3/global');
  }
}
