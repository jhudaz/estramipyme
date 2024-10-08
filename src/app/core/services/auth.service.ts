import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin: any  =  {
    user: "administrador",
    password:"nodo123admin"
  }

  constructor() { }

  login(user: any, password: any){
    if(user === this.admin.user && password === this.admin.password){
      localStorage.setItem('user', JSON.stringify({ user: this.admin.user , password: this.admin.password}));
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLogged(){
    if(localStorage.getItem('user')){
      return localStorage.getItem('user');
    } else {
      return false;
    }
  }


  cleanFormValues(form: FormGroup) {
    form.valueChanges.subscribe(() => {
      // Trim the username
      const trimmedUsername: any = form.get('username')?.value?.trim();
      if (form.get('username')?.value !== trimmedUsername) {
        form.get('username')?.setValue(trimmedUsername, { emitEvent: false });
      }
      // Trim the password
      const trimmedPassword: any = form.get('password')?.value?.trim();
      if (form.get('password')?.value !== trimmedPassword) {
        form.get('password')?.setValue(trimmedPassword, { emitEvent: false });
      }
    });
  }

}
