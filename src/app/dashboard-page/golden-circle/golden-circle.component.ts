import { Component } from '@angular/core';
import { FormContainerComponent } from './form-container/form-container.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'golden-circle',
  standalone: true,
  imports: [
    AdminNavbarComponent,
    FormContainerComponent
  ],
  templateUrl: './golden-circle.component.html',
  styleUrl: './golden-circle.component.scss'
})
export class GoldenCircleComponent {

}
