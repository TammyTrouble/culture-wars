import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueeroesComponent } from './queeroes.component';

describe('QueeroesComponent', () => {
  let component: QueeroesComponent;
  let fixture: ComponentFixture<QueeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
