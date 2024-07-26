import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../../imports';
import { FormPanelComponent } from './form-panel/form-panel.component';

@Component({
  selector: 'form-container',
  standalone: true,
  imports: [ImportsModule ,FormPanelComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent implements OnInit{
  items: any[] = [];

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Círculo Dorado'}
    ];
  }
}
