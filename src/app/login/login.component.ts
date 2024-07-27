import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  constructor(private authservice: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("QUE HAY AQUI: ", this.loginForm.value);
      const loged = this.authservice.login(this.loginForm.value.username, this.loginForm.value.password);
      if (loged) {
        this.router.navigate(['/dashboard']);
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    }
  }

}
