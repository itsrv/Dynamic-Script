import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicScriptComponent } from './dynamic-script.component';

describe('DynamicScriptComponent', () => {
  let component: DynamicScriptComponent;
  let fixture: ComponentFixture<DynamicScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
