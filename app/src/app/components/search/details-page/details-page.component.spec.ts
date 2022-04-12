import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import ChangeColorPipe from 'src/app/pipes/change-color/change-color.pipe';
import DetailsPageComponent from './details-page.component';

describe('DetailsPageComponent', () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ChangeColorPipe],
    }).compileComponents();
    fixture = TestBed.createComponent(DetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
