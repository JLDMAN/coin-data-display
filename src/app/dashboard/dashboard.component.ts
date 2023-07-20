import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showData: boolean = false;
  listOfPossibleCoins: any[] = [];
  selectedCoin: string = '';

  constructor(
  ){
  }

  ngOnInit(){
    this.listOfPossibleCoins = [
      { id: 'bitcoin', display: 'Bitcoin'},
      { id: 'kaspa', display: 'Kaspa'},
      { id: 'ethereum-classic', display: 'Etherium Classic'},
      { id: 'litecoin', display:'Litecoin'}
    ];
  }

  loadData(){
    this.showData = false; // Show the chart

    if (this.selectedCoin){
      this.showData = true; // Show the chart
    }
  }
}
