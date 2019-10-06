import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBeerComponent } from './update-beer.component';

describe('UpdateBeerComponent', () => {
  let component: UpdateBeerComponent;
  let fixture: ComponentFixture<UpdateBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
