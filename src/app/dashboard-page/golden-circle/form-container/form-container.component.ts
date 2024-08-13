import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../../imports';
import { CustomFormComponent } from '@shared/custom-form/custom-form.component';

@Component({
  selector: 'form-container',
  standalone: true,
  imports: [ImportsModule , CustomFormComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent implements OnInit{
  items: any[] = [];
  methodology: string = "goldenCircle";

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Círculo Dorado'}
    ];
  }
}
