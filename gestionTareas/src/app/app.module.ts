import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';

// Servicios
import { MovimientosService } from "./services/movimientos.service";
import { NgApexchartsModule } from 'ng-apexcharts';
//MOdulos
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashBoardComponent,
    MovimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [MovimientosService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
