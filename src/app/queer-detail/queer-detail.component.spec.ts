import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueerDetailComponent } from './queer-detail.component';

describe('QueerDetailComponent', () => {
  let component: QueerDetailComponent;
  let fixture: ComponentFixture<QueerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
