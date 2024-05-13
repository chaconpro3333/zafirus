import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroListPage } from './hero-list.page';

describe('HeroListPage', () => {
  let component: HeroListPage;
  let fixture: ComponentFixture<HeroListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
