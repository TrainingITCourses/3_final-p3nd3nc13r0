import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-botonera-lanzamientos-presenter',
  template: `
    <p>
      Ordenar por fecha:
      <input type="button" value="Asc" (click)="ordenarClicked('asc')">
      <input type="button" value="Dsc" (click)="ordenarClicked('dsc')">
    </p>
  `,
  styleUrls: []
})
export class BotoneraLanzamientosPresenterComponent implements OnInit {

  @Output() public reordenar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public ordenarClicked = (termino: string) => {
    this.reordenar.next(termino);
  }


}
