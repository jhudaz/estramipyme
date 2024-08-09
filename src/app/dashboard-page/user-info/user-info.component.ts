import { Component, OnInit } from '@angular/core';
import { ImportsModule } from 'src/app/imports';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-info',
  standalone: true,
  imports: [ImportsModule,FormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  items: MenuItem[] = [];
  date: Date[] | undefined;
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Correo',
        icon: 'pi pi-envelope',
        badge: '5',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-file-edit',
          },
          {
            label: 'Bandeja',
            icon: 'pi pi-inbox',
            badge: '5',
          },
          {
            label: 'Enviados',
            icon: 'pi pi-send',
          },
          {
            label: 'Papelera',
            icon: 'pi pi-trash',
          },
        ],
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Empresas',
            icon: 'pi pi-chart-line',
            badge: '3',
          },
          {
            label: 'Usuarios',
            icon: 'pi pi-list',
            badge: '6',
          },
        ],
      },
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Editar',
            icon: 'pi pi-cog',
          },
          {
            label: 'Privacidad',
            icon: 'pi pi-shield',
          },
        ],
      },
    ];
  }
  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items = this.toggleAllRecursive(this.items, expanded);
  }
  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
      menuItem.expanded = expanded;
      if (menuItem.items) {
        menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
      }
      return menuItem;
    });
  }

  private areAllItemsExpanded(): boolean {
    return this.items.every((menuItem) => menuItem.expanded);
  }
}
