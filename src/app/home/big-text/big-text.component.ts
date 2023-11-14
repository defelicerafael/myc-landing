import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from 'src/app/directives/intersection.directive';
import { ScrollingService } from '../services/scrolling.service';

@Component({
  selector: 'app-big-text',
  standalone: true,
  imports: [CommonModule, IntersectionDirective],
  templateUrl: './big-text.component.html',
  styleUrls: ['./big-text.component.css']
})
export class BigTextComponent {
  public scrolling = inject(ScrollingService);
}
