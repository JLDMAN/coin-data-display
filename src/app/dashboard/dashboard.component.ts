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
    this.showSubRoutes = false;
    this.router.navigate(['dashboard/overview']);
    this.showSubRoutes = true;
  }

  loadInfo(){
    this.showSubRoutes = false;
    this.router.navigate(['dashboard/projectdetails']);
    this.showSubRoutes = true;
  }

  loadExchangeInfo(){
    this.showSubRoutes = false;
    this.router.navigate(['dashboard/exchanges']);
    this.showSubRoutes = true;
  }
}
