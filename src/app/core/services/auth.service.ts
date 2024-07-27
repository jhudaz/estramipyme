import { Injectable } from '@angular/core';

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
    console.log("LLEGO AL SERVICIO: ", user, password);
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

}
