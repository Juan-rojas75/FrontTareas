import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { MovimientosService } from '../../services/movimientos.service';
import * as moment from 'moment';

//MODELOS
import { movimientoModel } from "../../models/movimiento-model.models";              
@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent {
  //MODELOS
  private newMovimiento :movimientoModel={
    id: undefined,
    valor: '',
    tipo: '',
    descripcion: '',
    cuentaOrigen: '',
    cuentaDestino: '',
    fecha: undefined
  }
  //FORMULARIO
  movimientosForm :FormGroup;
  constructor(public movimientosService:MovimientosService,private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.movimientosForm = this.fb.group({
      // otros controles del formulario
      valor : new FormControl('',[Validators.required]),
      tipo : new FormControl('',[Validators.required]),
      descripcion : new FormControl(''),
      cuentaOrigen : new FormControl(''),
      cuentaDestino : new FormControl(''),
      fecha : new FormControl(''),
      // tipo: new FormControl('',[Validators.required, Validators.minLength(5)]),
      
    });
  }

  sendMovimiento(){
    // let Fecha = new Date(this.movimientosForm.get("fecha").value.toString())
    var dateString = this.movimientosForm.get("fecha").value.toString();  
    var momentVariable = moment(dateString, 'DD-MM-YYYY');  
    var Fecha = momentVariable.format('YYYY-MM-DD');   
    console.log(Fecha); // outputs 2018-08-25  
    this.newMovimiento = {
      id:1,
      valor: this.movimientosForm.get("valor").value.toString(),
      tipo: this.movimientosForm.get("tipo").value.toString(),
      descripcion: this.movimientosForm.get("descripcion").value.toString(),
      cuentaOrigen: this.movimientosForm.get("cuentaOrigen").value.toString(),
      cuentaDestino: this.movimientosForm.get("cuentaDestino").value.toString(),
      fecha: Fecha};
    this.movimientosService.postMovimiento(this.newMovimiento,"movimientos/api/v1/movimientos/").subscribe(
      (res)=>{
        console.log(res)
      }
    )

  }
    
}
