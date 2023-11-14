import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { IntersectionDirective } from '../../directives/intersection.directive';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,IntersectionDirective],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  constructor() { }
 
  public carouselImgs:{img:string,txt:string}[] = [
    {"img":"https://myyachtcompany.com/wp-content/uploads/Amalfitana-1.jpg","txt":"Mi experiencia alquilando un yate para explorar el Mediterráneo fue absolutamente increíble. Desde el momento en que subimos a bordo, el equipo nos recibió con una hospitalidad excepcional. El yate era una obra maestra de lujo, con todas las comodidades que uno pueda imaginar."},
    {"img":"https://myyachtcompany.com/wp-content/uploads/Amalfitana-2.jpg","txt":"Navegar por el Mediterráneo a bordo de este yate fue como vivir en un sueño. Las aguas cristalinas, las vistas impresionantes y la brisa fresca crearon un escenario perfecto para una aventura inolvidable. El capitán y la tripulación fueron muy profesionales, asegurándose de que cada momento fuera memorable."},
    {"img":"https://myyachtcompany.com/wp-content/uploads/Amalfitana-4.jpg","txt":"El yate en sí era una maravilla de la ingeniería naval, con habitaciones elegantes y áreas comunes que rivalizaban con los mejores hoteles de cinco estrellas. Pasamos días relajándonos en la cubierta, disfrutando del sol y las vistas panorámicas."}
  ];
  

  public imgindex:number = 0;
  public limiteMax:number = this.carouselImgs.length-1;
  public imgSeleccionada = new BehaviorSubject<string>(this.carouselImgs[this.imgindex].img);
  public val:string= 'left';
  
  public seleccionar(index:number){
     this.imgSeleccionada.next(this.carouselImgs[index].img);
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
      this.carouselImgs.push(this.carouselImgs[0]);
      this.carouselImgs.shift();
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
   
    this.carouselImgs.push(this.carouselImgs[0]);
    this.carouselImgs.shift();
    //console.log(this.carouselImgs); 
  }

  


  ngOnInit(): void {
    this.seleccionar(0);
    this.retrocede();
  }

}
