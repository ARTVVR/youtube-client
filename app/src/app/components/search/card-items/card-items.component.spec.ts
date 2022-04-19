import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import ChangeColorPipe from 'src/app/pipes/change-color/change-color.pipe';
import CardItemsComponent from './card-items.component';

describe('CardItemsComponent', () => {
  let component: CardItemsComponent;
  let fixture: ComponentFixture<CardItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ChangeColorPipe],
    }).compileComponents();
    fixture = TestBed.createComponent(CardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
