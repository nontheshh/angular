import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomewrapComponent } from './somewrap.component';

describe('SomewrapComponent', () => {
  let component: SomewrapComponent;
  let fixture: ComponentFixture<SomewrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomewrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomewrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
