import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-usuario',
  templateUrl: './post-usuario.component.html',
  styleUrls: ['./post-usuario.component.css']
})
export class PostUsuarioComponent implements OnInit {

  posts: Array<any> = []
  
  salvar(key,texto){
    localStorage.setItem(key,texto);
  }
  inserirPost(post){
    this.posts.push(post);
    this.salvar(this.posts.length++,post);
    console.log(this.posts);
    
  }

  ngOnInit(): void {
  }

}
