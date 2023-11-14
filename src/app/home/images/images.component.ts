import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../directives/intersection.directive';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule,IntersectionDirective],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

}
