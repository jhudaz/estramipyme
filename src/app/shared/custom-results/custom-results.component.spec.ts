import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomResultsComponent } from './custom-results.component';

describe('CustomResultsComponent', () => {
  let component: CustomResultsComponent;
  let fixture: ComponentFixture<CustomResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
