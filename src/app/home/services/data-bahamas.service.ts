import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBahamasService { 

  constructor() { }



  public dataHeader:any[] = [
    {
      'bg':'../../../assets/img/bvi/bvi.webp', 
      'img':'assets/img/MYC_logo_white.png',
      'h1':'My Yacht Company es líder en <span class="text-azul">alquiler de veleros, catamaranes y yates</span> para navegar en <span class="text-azul">el Caribe</span>.',
      'h2':'Navega por <span class="text-azul"> las Bahamas y BVI (Islas Vírgenes Británicas) </span> con las mejores flotas de barcos y al <span class="text-azul">mejor precio</span>.'
    }
  ];
  public dataImages:any[] = [
    {
      'img1':'assets/img/bahamas/exumas/Bahamas-2.webp', 
      'img2':'assets/img/bahamas/exumas/Exumas3.jpg',
      'img3':'assets/img/bvi/British Virgin Islands 7 dias-4.webp',
      'img4':'assets/img/bahamas/exumas/NormansCay.jpg',
      'img5':'assets/img/bvi/British Virgin Islands 7 dias-8.webp',
      'img6':'assets/img/bahamas/exumas/Exumas.jpg',
      'txt':'"Explorar las Bahamas e Islas Vírgenes Británicas en barco es una experiencia maravillosa, aguas cristalinas, playas de arena blanca y una gran cantidad de islas para descubrir".'
    }
  ];

  public dataImagestxt:any[] = [
    {
      'img1':'assets/img/bvi/British Virgin Islands 7 dias-23.webp',
      'alt1':'', 
      'img2':'assets/img/bahamas/yachts-anchored-paradise-beach-shroud-cay-exumas.jpg',
      'alt2':'',
      'h2':'Vive el Caribe de una forma exclusiva.',
      'h3':'Alquila tu catamarán, velero o yate. <br/><br/> Navega por BVI: Normal Island, Peter Island, Salt Island, Cooper Island, Ginger Island, Virgin Gorda, Anegada...',
      'botton':'Contactanos',
    }
    
  ];
  public carouselImgs:{img:string,titulo:string,txt:string}[] = [ 
    {"img":"assets/img/bahamas/exumas/bahamas-6.webp","titulo":'Exumas<br/>Norman\'s Cay',"txt":"Aquí las condiciones son ideales para realizar sus deportes náuticos favoritos. Encontrará unas ruinas hundidas de un avión extraviado que generan un habitat natural único."},
    {"img":"assets/img/bahamas/exumas/bahamas-18.webp","titulo":'Exumas<br/>Warderick Wells Cay',"txt":"Existen aproximadamente 20 caminos naturales para explorar en tierra y 15 playas solitarias ubicadas a lo largo de toda la isla."},
    {"img":"assets/img/bahamas/exumas/Bahamas-23.webp","titulo":'Exumas<br/>Shroud Cay',"txt":"Se trata de una isla deshabitada, con únicamente rocas y playas de arena blanca y un hermoso canal. Hay langostas y tortugas marinas entre otras especies."}
  ];

  public carouselTxt:{txt:string}[] = [ 
    {"txt":"Playas famosas  por sus paisajes tranquilos. Explora ruinas de aviones extraviados. Visita las Exumas."},
  ];

}
