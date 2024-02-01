import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeComponent } from '../iframe/iframe.component';
import { IntersectionDirective } from '../../directives/intersection.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,IframeComponent,IntersectionDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
