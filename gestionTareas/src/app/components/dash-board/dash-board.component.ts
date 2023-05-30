import { Component, ViewChild } from '@angular/core';
import { MovimientosService } from '../../services/movimientos.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  public Datos:number[]=[]
  public Fechas:string[]=[]
  @ViewChild("chart") cahart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(public movimientosService:MovimientosService) {

    this.movimientosService.getMovimientos("movimientos/api/v1/movimientos/").subscribe(
      (res)=>{
        
        for (let index = 0; index < res.length; index++) {
          const element  = res[index];
          console.log(element)
          console.log(Number(element["valor"].replaceAll(".","")))
          this.Datos.push(Number(element["valor"].replaceAll(".","")))
          this.Fechas.push(element["fecha"])
        }
      }
    )

    this.chartOptions = {
      series: [
        {
          name: "Valor",
          data: this.Datos
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Movimientos"
      },
      xaxis: {
        categories: this.Fechas
      }
    };
  }
}
