import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  estado:string ='login';
  evento:string = "";
  

  
alteraEstado(estado:string){
    this.estado = estado;
  }
 
  
  onAcesso(evento){
    if(evento =="false"){
      this.alteraEstado("login");
    }
    else{
      this.evento = evento;
    console.log(this.evento);
    this.alteraEstado("logado");
    }
    
  }
  
}
