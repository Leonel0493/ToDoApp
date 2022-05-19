import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateContainerComponent } from './ngtemplate-container.component';

describe('NgtemplateContainerComponent', () => {
  let component: NgtemplateContainerComponent;
  let fixture: ComponentFixture<NgtemplateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtemplateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtemplateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
