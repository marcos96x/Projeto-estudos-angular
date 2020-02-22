import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualizar-posts',
  templateUrl: './visualizar-posts.component.html',
  styleUrls: ['./visualizar-posts.component.css']
})
export class VisualizarPostsComponent implements OnInit {
  
  @Input() dados:any = "julia";
  @Input() postsEnviados: Array<string> = ["Paula"];
  
  
  ngOnInit(): void {
  }
  
    

    
    
  

}
