import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { ImportsModule } from '../imports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    DialogComponent,
    ImportsModule,
    CommonModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {

  @ViewChild(DialogComponent) dialog!: DialogComponent;
  constructor(private authservice: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  ngAfterViewInit() {
    
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loged = this.authservice.login(this.loginForm.value.username, this.loginForm.value.password);
      if (loged) {
        this.router.navigate(['/dashboard']);
      } else {
        this.showErrorDialog("Usuario o contraseña incorrecta", "warning");
      }
    } else {
      this.showErrorDialog("Por favor, complete todos los campos", "alert");
    }

  }
  showErrorDialog(message: string, icon: string) {
    this.dialog.showDialog(message, icon);
  }

}
