import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalImageReviewComponent } from './minimal-image-review.component';

describe('MinimalImageReviewComponent', () => {
  let component: MinimalImageReviewComponent;
  let fixture: ComponentFixture<MinimalImageReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimalImageReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalImageReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
