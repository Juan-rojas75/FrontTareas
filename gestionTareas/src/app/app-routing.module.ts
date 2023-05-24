import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { MovimientosComponent } from "./components/movimientos/movimientos.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'movimientos', component: MovimientosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
