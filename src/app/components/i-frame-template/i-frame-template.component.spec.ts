import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFrameTemplateComponent } from './i-frame-template.component';

describe('IFrameTemplateComponent', () => {
  let component: IFrameTemplateComponent;
  let fixture: ComponentFixture<IFrameTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IFrameTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFrameTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
