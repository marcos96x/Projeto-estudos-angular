import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialUsuarioComponent } from './inicial-usuario/inicial-usuario.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { DadosUsuarioComponent } from './inicial-usuario/dados-usuario/dados-usuario.component';
import { PostUsuarioComponent } from './inicial-usuario/post-usuario/post-usuario.component';
import { VisualizarPostsComponent } from './inicial-usuario/visualizar-posts/visualizar-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    InicialUsuarioComponent,
    NavBarComponent,
    DadosUsuarioComponent,
    PostUsuarioComponent,
    VisualizarPostsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
   

  ],
  exports:[
    AppComponent
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
