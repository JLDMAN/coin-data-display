import { Component, Input, OnInit } from '@angular/core';
import { ApiCallsService} from '../service/apicalls.service';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css']
})
export class KeyvalueComponent implements OnInit{

  @Input() id: string = '';
  value: number=0;
  tradingVolume24h: number=0;
  change: number=0;

  constructor(
    private service: ApiCallsService
  ){
  }

  ngOnInit():void{
    this.getCurrentValue();
  }

  getCurrentValue(){
    console.log("triggered in function: ");
    const id = this.id;
        this.service.queryCurrentValueFiat(id).subscribe(res =>{ 
        this.value = res[id].usd;
        this.change = res[id].usd_24h_change.toFixed(2);
        this.tradingVolume24h = res[id].usd_24h_vol.toFixed(2);
    })
  }
}
