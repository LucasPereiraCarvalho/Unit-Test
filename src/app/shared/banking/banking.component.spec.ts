import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): should have poupanca equal 10', () => {
    expect(component.getPoupanca).toBe(10);
  });

  it('(U) getCarteira(): should have poupanca equal 50', () => {
    expect(component.getCarteira).toBe(50);
  });

  it('(U) setSacar(): should transfer poupanca from carteira', () => {
    component.setSacar('10');

    expect(component.getCarteira).toBe(60);
    expect(component.getPoupanca).toBe(0);
  });

  it('(i) setSacar(): should transfer poupanca from carteira', () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
  });

  it('(U) setSacar(): shoud transfer poupaca dont have string (isNaN) or poupaca < value', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getCarteira).toBe(50);
    expect(component.getPoupanca).toBe(10);
  });

  it('(U) setDepositar(): should transfer carteira from poupanca', () => {
    component.setDepositar('10');

    expect(component.getCarteira).toBe(40);
    expect(component.getPoupanca).toBe(20);
  });

  it('(U) setDepositar(): shoud transfer depositar dont have string (isNaN) or depositar < value', () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getCarteira).toBe(50);
    expect(component.getPoupanca).toBe(10);
  });

  it('(i) setDepositar(): should transfer carteira from poupanca', () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });
});
