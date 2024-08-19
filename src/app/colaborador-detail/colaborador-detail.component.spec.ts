import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorDetailComponent } from './colaborador-detail.component';

describe('ColaboradorDetailComponent', () => {
  let component: ColaboradorDetailComponent;
  let fixture: ComponentFixture<ColaboradorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
