import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrendChartComponent } from './trend-chart/trend-chart.component';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
// display modules for html elements
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
// material ui master module
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
// charts
import { NgChartsModule } from 'ng2-charts';
import { KeyvalueComponent } from './keyvalue/keyvalue.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrendChartComponent,
    KeyvalueComponent
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
    NgChartsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
