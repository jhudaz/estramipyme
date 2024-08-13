import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../../imports';
import { CustomFormComponent } from '@shared/custom-form/custom-form.component';

@Component({
  selector: 'radar-form',
  standalone: true,
  imports: [ImportsModule, CustomFormComponent],
  templateUrl: './radar-form.component.html',
  styleUrl: './radar-form.component.scss',
})
export class RadarFormComponent implements OnInit {
  items: any[] = [];
  methodology: string = 'radar';

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Radar Estratetigo' },
    ];
  }
}
