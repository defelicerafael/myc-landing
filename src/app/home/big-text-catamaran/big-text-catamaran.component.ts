import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from 'src/app/directives/intersection.directive';
import { ScrollingService } from '../services/scrolling.service';
import { TypewrittingService } from '../services/typewritting.service';

@Component({
  selector: 'app-big-text-catamaran',
  standalone: true,
  imports: [CommonModule, IntersectionDirective],
  templateUrl: './big-text-catamaran.component.html',
  styleUrls: ['./big-text-catamaran.component.css']
})
export class BigTextCatamaranComponent {
  public scrolling = inject(ScrollingService);
  public maquinaEsribir = inject(TypewrittingService);

  public h1:string = 'My Yacht Company es líder en <span class="text-azul">alquiler de catamaranes</span> para navegar por <span class="text-azul">Grecia</span>.';
  public h2:string = 'Navega por <span class="text-azul"> las Cícladas: Mykonos, Delos, Naxos, Paros, Amorgos y Santorini</span> con las mejores flotas de barcos y al <span class="text-azul">mejor precio</span>.';

}
