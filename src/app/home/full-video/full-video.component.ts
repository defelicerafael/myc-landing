import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IntersectionDirective } from 'src/app/directives/intersection.directive';
import { ScrollingService } from '../services/scrolling.service';


@Component({
  selector: 'app-full-video',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,IntersectionDirective],
  templateUrl: './full-video.component.html',
  styleUrls: ['./full-video.component.css']
})
export class FullVideoComponent {
  
  @Input() video:string = "https://myyachtcompany.com/wp-content/uploads/2018/12/MYC_bg_test_op.mp4";
  @Input() videoMobile:string = "";
  @Input() img:string = "";
  @Input() imgMobile:string = "";

  public scrolling = inject(ScrollingService);
}
