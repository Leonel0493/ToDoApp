import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyselfDirectiveComponent } from './myself-directive.component';

describe('MyselfDirectiveComponent', () => {
  let component: MyselfDirectiveComponent;
  let fixture: ComponentFixture<MyselfDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyselfDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyselfDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
