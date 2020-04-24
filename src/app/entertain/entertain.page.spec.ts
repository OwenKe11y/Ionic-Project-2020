import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntertainPage } from './entertain.page';

describe('EntertainPage', () => {
  let component: EntertainPage;
  let fixture: ComponentFixture<EntertainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
