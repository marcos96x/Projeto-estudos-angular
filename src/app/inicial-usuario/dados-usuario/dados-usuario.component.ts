import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent {

  usuario = 
  { nome:"Paula",
    local:"Brasil",
    bio:"Estudante de Analise e desenvolvimento de sistemas na Fatec de Praia Grande, programadora front-end na Hi-tec Softwares.",
    foto:"https://picsum.photos/seed/picsum/200/200"
 };

}
