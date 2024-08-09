import { Component } from '@angular/core';
import { ImportsModule } from 'src/app/imports';

@Component({
  selector: 'custom-dialog',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent {
  visible: boolean = false;
  position: any = 'center';

  showDialog(position:any) {
    this.position = position;
    this.visible = true;
}
}
