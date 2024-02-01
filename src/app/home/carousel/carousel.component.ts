import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { IntersectionDirective } from '../../directives/intersection.directive';
import { DataBahamasService } from '../services/data-bahamas.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,IntersectionDirective],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  constructor() { }
  public dataService = inject(DataBahamasService);
  
  

  public imgindex:number = 0;
  public limiteMax:number = this.dataService.carouselImgs.length-1;
  public imgSeleccionada = new BehaviorSubject<string>(this.dataService.carouselImgs[this.imgindex].img);
  public val:string= 'left';
  
  public seleccionar(index:number){
     this.imgSeleccionada.next(this.dataService.carouselImgs[index].img);
  }

  public retrocede():void {
      this.val = 'izq';
      if(this.imgindex===0){
        this.imgindex = this.limiteMax;
        //console.log(this.imgindex);
      }else{
        this.imgindex--;
        //console.log(this.imgindex);
      }
      this.dataService.carouselImgs.push(this.dataService.carouselImgs[0]);
      this.dataService.carouselImgs.shift();
      //console.log(this.carouselImgs); 
  }
  public avanza():void {
    this.val = 'der';
    if(this.imgindex===this.limiteMax){
      this.imgindex = 0;
      //console.log(this.imgindex);
    }else{
      this.imgindex++;
      //console.log(this.imgindex);
    }
   
    this.dataService.carouselImgs.push(this.dataService.carouselImgs[0]);
    this.dataService.carouselImgs.shift();
    //console.log(this.carouselImgs); 
  }

  


  ngOnInit(): void {
    this.seleccionar(0);
    this.retrocede();
  }

}
