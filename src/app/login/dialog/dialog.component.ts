import { Component } from '@angular/core';
import { ImportsModule } from 'src/app/imports';

@Component({
  selector: 'message-dialog',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  visible: boolean = false;
  message: string = '';
  icons: any = {
    alert: {
      icon: 'fa fa-exclamation-triangle',
      class: 'icon-alert',
    },
    warning: {
      icon: 'fa fa-exclamation-circle',
      class: 'icon-warning',
    }
  }
  icon: string = '';
  classStyle: string = '';

  showDialog(message: string, icon: string) {
    this.visible = true;
    this.message = message;
    this.icon = this.icons[icon].icon;
    this.classStyle = this.icons[icon].class;
  }
}
