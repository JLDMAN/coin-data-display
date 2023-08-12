import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrendChartComponent } from './overview/trend-chart/trend-chart.component';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
// display modules for html elements
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
// material ui master module
// Import PrimeNG modules
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
// charts
import { NgChartsModule } from 'ng2-charts';
import { KeyvalueComponent } from './overview/keyvalues/keyvalue.component';
import { Top10coinsComponent } from './overview/top10coins/top10coins.component';
import { LogosComponent } from './dashboard/logos/logos.component';
import { OverviewComponent } from './overview/overview.component';
import { SocialComponent } from './social/social.component';
import { ExchangesComponent } from './exchanges/exchanges.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrendChartComponent,
    KeyvalueComponent,
    Top10coinsComponent,
    LogosComponent,
    OverviewComponent,
    SocialComponent,
    ExchangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MultiSelectModule,
    ButtonModule,
    DropdownModule,
    ToggleButtonModule,
    NgChartsModule,
    SelectButtonModule,
    CardModule,
    TableModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
