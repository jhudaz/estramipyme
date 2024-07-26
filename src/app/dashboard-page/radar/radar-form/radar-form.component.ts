import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../../imports';
import { FormPanelComponent } from './form-panel/form-panel.component';

@Component({
  selector: 'radar-form',
  standalone: true,
  imports: [ImportsModule, FormPanelComponent],
  templateUrl: './radar-form.component.html',
  styleUrl: './radar-form.component.scss',
})
export class RadarFormComponent implements OnInit {
  items: any[] = [];

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Radar Estratetigo' },
    ];
  }
}
