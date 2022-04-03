import { ComponentFixture, TestBed } from '@angular/core/testing';

import SearchWithFilterComponent from './search-with-filter.component';

describe('SearchInputWithSubmitButtonComponent', () => {
  let component: SearchWithFilterComponent;
  let fixture: ComponentFixture<SearchWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchWithFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
