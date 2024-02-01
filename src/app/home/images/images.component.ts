import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../directives/intersection.directive';
import { NgOptimizedImage } from '@angular/common'
import { DataBahamasService } from '../services/data-bahamas.service';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule,IntersectionDirective,NgOptimizedImage],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  public dataService = inject(DataBahamasService);
}
