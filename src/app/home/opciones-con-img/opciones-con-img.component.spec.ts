import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesConImgComponent } from './opciones-con-img.component';

describe('OpcionesConImgComponent', () => {
  let component: OpcionesConImgComponent;
  let fixture: ComponentFixture<OpcionesConImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesConImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesConImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
