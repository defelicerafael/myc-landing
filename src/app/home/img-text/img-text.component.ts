import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../directives/intersection.directive';
import { ScrollingService } from '../services/scrolling.service';
import { NgOptimizedImage } from '@angular/common'
import { DataBahamasService } from '../services/data-bahamas.service';

@Component({
  selector: 'app-img-text',
  standalone: true,
  imports: [CommonModule,IntersectionDirective,NgOptimizedImage],
  templateUrl: './img-text.component.html',
  styleUrls: ['./img-text.component.css']
})
export class ImgTextComponent {
    public scrolling = inject(ScrollingService);
    public dataService = inject(DataBahamasService);
} 
