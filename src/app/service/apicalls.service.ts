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

  queryCurrentValueFiat(id: any){
    const coin = id;
    return this.http.get<any>('https://api.coingecko.com/api/v3/simple/price?ids='+coin+'&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&precision=2');
    
  }
}
