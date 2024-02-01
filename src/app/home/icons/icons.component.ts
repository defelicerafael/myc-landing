import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../directives/intersection.directive';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule,IntersectionDirective,NgOptimizedImage],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {

}
