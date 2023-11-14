import { Injectable } from '@angular/core';

interface menu{
  url: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu : menu[] = [];
  
  constructor() { 
    this.menu = [
      {url: "/",name:"Home"},
      {url: "bio",name:"Bio"},
      {url: "works",name:"Works"}
    ]
  }
}
