import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showSubRoutes: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(){
  }

  printScreen(){
  }

  loadOverview() {
    this.router.navigate(['dashboard/overview']);
  }

  loadTop10Coins(){
    this.router.navigate(['dashboard/top10coins']);
  }

  loadExchangeInfo(){
    this.router.navigate(['dashboard/exchanges']);
  }
}
