import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Output()  imageUrl: string = '';

  id: string = '';
  showIcon: boolean = false;
  listOfPossibleCoins: any[] = [];
  selectedCoin: string = '';
  overView: boolean = false;
  showSubRoutes: boolean = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.listOfPossibleCoins = [
      { id: 'bitcoin', display: 'Bitcoin'},
      { id: 'kaspa', display: 'Kaspa'},
      { id: 'ethereum-classic', display: 'Etherium Classic'},
      { id: 'litecoin', display:'Litecoin'},
      { id: 'polkadot', display: 'Polkadot'}
    ];

    this.id='bitcoin';
    this.showIcon = true
    // console.log("image url string: " + this.imageUrl);
  }

  loadData(){
    this.showIcon = false; // hide data
    setTimeout(() => {
      this.showIcon = true; // show the chart after a short delay
      // console.log("image url string: " + this.imageUrl);
    }, 1);
  }

  onImageIdChange(imageId: string) {
    this.imageUrl = imageId;
  }
}
