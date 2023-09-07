import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  mostraMenu =  new Subject<boolean>();

  login(usuario:string, senha:string):void{
    if(usuario =="mauricio" && senha=="mauricio"){
      localStorage.setItem('token','qwer1234');
      this.mostraMenu.next(false)
      console.log('oie')
      } else{
      this.mostraMenu.next(true)
      }
  }

  setMostraMenu(valor:boolean){
    this.mostraMenu.next(valor);
  }
  getMostraMenu(){
    return this.mostraMenu.asObservable();
  }
  
  constructor() { }


}
