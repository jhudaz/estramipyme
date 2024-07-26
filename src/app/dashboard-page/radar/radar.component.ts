import { Component } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { RadarFormComponent } from './radar-form/radar-form.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [
    AdminNavbarComponent,
    RadarFormComponent,
    RadarChartComponent
  ],
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.scss'
})
export class RadarComponent {
  formIsCompleted:boolean = false;
}
