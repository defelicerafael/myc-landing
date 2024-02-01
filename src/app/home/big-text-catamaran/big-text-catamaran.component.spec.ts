import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTextCatamaranComponent } from './big-text-catamaran.component';

describe('BigTextComponent', () => {
  let component: BigTextCatamaranComponent;
  let fixture: ComponentFixture<BigTextCatamaranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BigTextCatamaranComponent]
    });
    fixture = TestBed.createComponent(BigTextCatamaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
