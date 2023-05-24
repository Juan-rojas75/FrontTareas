import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  Movimientos: any[] = [ 
    {
      id: 0,
      isActive: false,
      fecha:"5/20/2023",
      tipo: 'Gasto',
      origen: 'Cuenta1',
      destino: 'Cuenta1',
      valor: 15654,
      descipcion: 'Cuenta1',
    },
    {
      id: 1,
      isActive: true,
      fecha:"5/20/2023",
      tipo: 'Gasto',
      origen: 'Cuenta1',
      destino: 'Cuenta1',
      valor: 15654,
      descipcion: 'Cuenta1',
    },
    {
      id: 2,
      fecha:"5/20/2023",
      tipo: 'Gasto',
      origen: 'Cuenta1',
      destino: 'Cuenta1',
      valor: 15654,
      descipcion: 'Cuenta1',
    },
  ];
  constructor() { }
  // FUNCIONES
  getMovimientos() { 
    return this.Movimientos;
  }

  getMovimiento(id: number) { 
    return this.Movimientos[id];
  }
}
