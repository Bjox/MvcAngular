import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolcomponentComponent } from './lolcomponent.component';

describe('LolcomponentComponent', () => {
  let component: LolcomponentComponent;
  let fixture: ComponentFixture<LolcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
