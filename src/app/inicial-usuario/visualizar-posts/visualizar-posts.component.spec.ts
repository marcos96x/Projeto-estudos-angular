import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPostsComponent } from './visualizar-posts.component';

describe('VisualizarPostsComponent', () => {
  let component: VisualizarPostsComponent;
  let fixture: ComponentFixture<VisualizarPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
