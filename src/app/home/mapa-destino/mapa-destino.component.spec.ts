import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDestinoComponent } from './mapa-destino.component';

describe('MapaDestinoComponent', () => {
  let component: MapaDestinoComponent;
  let fixture: ComponentFixture<MapaDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MapaDestinoComponent]
    });
    fixture = TestBed.createComponent(MapaDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
