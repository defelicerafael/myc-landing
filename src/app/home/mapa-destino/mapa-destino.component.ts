import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../directives/intersection.directive';

@Component({
  selector: 'app-mapa-destino',
  standalone: true,
  imports: [CommonModule,IntersectionDirective],
  templateUrl: './mapa-destino.component.html',
  styleUrls: ['./mapa-destino.component.css']
})
export class MapaDestinoComponent {

}
