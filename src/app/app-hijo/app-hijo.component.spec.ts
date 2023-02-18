import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHijoComponent } from './app-hijo.component';

describe('AppHijoComponent', () => {
  let component: AppHijoComponent;
  let fixture: ComponentFixture<AppHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
