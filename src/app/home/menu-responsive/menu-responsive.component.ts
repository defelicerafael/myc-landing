import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-menu-responsive',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.css']
})
export class MenuResponsiveComponent {
  
  public menu = inject(MenuService);
  constructor(){
    //console.log(this.menu);
  }
}
