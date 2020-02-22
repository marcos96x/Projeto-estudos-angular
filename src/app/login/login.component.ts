import { Component, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() emissor = new EventEmitter();
  acesso: string = 'false';

    email:string =  "user";
    senha:any =  '123';
 

  entrar(email, senha) {
    if (email == this.email && this.senha == senha) {
      this.acesso = 'true';
      this.emissor.emit(this.acesso);
     
    }
    else {
      this.acesso = 'false';
      this.emissor.emit(this.acesso);
    }
  }
}
