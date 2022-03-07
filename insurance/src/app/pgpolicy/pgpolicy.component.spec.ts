import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgpolicyComponent } from './pgpolicy.component';

describe('PgpolicyComponent', () => {
  let component: PgpolicyComponent;
  let fixture: ComponentFixture<PgpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
