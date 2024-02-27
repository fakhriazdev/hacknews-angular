import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListPageComponent } from './topic-list-page.component';

describe('TopicListPageComponent', () => {
  let component: TopicListPageComponent;
  let fixture: ComponentFixture<TopicListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
