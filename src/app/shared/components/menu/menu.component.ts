import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
    
   public Menuitems: MenuItem[] = [];

    ngOnInit(): void {
        this.Menuitems = [
          { 
            label: 'Pipes de angular', 
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No Comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              }
            ] 
          },
          {
            label: 'Pipe Personalizados',
            icon: 'pi pi-cog'
          }
          
        ]
    }

    

}
