import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemItensPage } from './listagem-itens.page';

describe('ListagemItensPage', () => {
  let component: ListagemItensPage;
  let fixture: ComponentFixture<ListagemItensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemItensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
