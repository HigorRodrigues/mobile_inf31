import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoServicoPage } from './tipo-servico.page';

describe('TipoServicoPage', () => {
  let component: TipoServicoPage;
  let fixture: ComponentFixture<TipoServicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
