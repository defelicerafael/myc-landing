import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../directives/intersection.directive';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule,IntersectionDirective],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {

}
