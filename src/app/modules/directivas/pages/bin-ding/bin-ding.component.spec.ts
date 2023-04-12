import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinDingComponent } from './bin-ding.component';

describe('BinDingComponent', () => {
  let component: BinDingComponent;
  let fixture: ComponentFixture<BinDingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinDingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinDingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
