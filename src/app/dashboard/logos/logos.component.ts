import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiCallsService } from '../../service/apicalls.service';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {

  constructor(
    private service: ApiCallsService
  ) {
  }

  @Input() id: string = '';
  thumb: string = '';
  large: string = '';

  ngOnInit(): void {
    this.getLogos();
  }

  getLogos() {
    const id = this.id;
    // get logo images
    this.service.queryForMarketRank(id).subscribe(res => {
      if (res) {
        this.thumb = res.coins[0].thumb;
        this.large = res.coins[0].large;
      }
    })
  }
}
