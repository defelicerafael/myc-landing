import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../directives/intersection.directive';

@Component({
  selector: 'app-opciones-con-img',
  standalone: true,
  imports: [CommonModule,IntersectionDirective],
  templateUrl: './opciones-con-img.component.html',
  styleUrls: ['./opciones-con-img.component.css']
})
export class OpcionesConImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
