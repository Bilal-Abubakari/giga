import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFiberComponent } from './request-fiber.component';

describe('RequestFiberComponent', () => {
  let component: RequestFiberComponent;
  let fixture: ComponentFixture<RequestFiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestFiberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
