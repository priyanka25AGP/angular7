import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageListComponent } from './country-language.component';

describe('LanguageListComponent', () => {
  let component: LanguageListComponent;
  let fixture: ComponentFixture<LanguageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
