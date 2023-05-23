import {Component, OnInit} from '@angular/core';
import {Vehiculo} from "../model/vehiculo";
import {VehiculosService} from "../service/vehiculos.service";

@Component({
  selector: 'app-list-vehiculos',
  templateUrl: './list-vehiculos.component.html',
  styleUrls: ['./list-vehiculos.component.css']
})
export class ListVehiculosComponent implements OnInit {
  public vehiculos: Array<Vehiculo> = [];
  public vehiculoSelected!: Vehiculo;
  public selected: boolean = false;

  constructor(private vehiculosService: VehiculosService) {
  }

  public getVehiculos() {
    this.vehiculosService.getVehiculos().subscribe(
      (vehiculos: Array<Vehiculo>) => {
        this.vehiculos = vehiculos;
      }
    );
  }

  ngOnInit(): void {
    this.getVehiculos();
  }

  onSelected(vehiculo: Vehiculo) {
    this.selected = true;
  this.vehiculoSelected = vehiculo;
  }
}
