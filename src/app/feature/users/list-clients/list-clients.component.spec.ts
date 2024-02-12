import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientComponent } from './list-clients.component';

describe('HomeComponent', () => {
  let component: ListClientComponent;
  let fixture: ComponentFixture<ListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
