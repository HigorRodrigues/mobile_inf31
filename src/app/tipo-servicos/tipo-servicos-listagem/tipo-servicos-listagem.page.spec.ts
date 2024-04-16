import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoServicosListagemPage } from './tipo-servicos-listagem.page';

describe('TipoServicosListagemPage', () => {
  let component: TipoServicosListagemPage;
  let fixture: ComponentFixture<TipoServicosListagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoServicosListagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
