import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntertainPageRoutingModule } from './entertain-routing.module';

import { EntertainPage } from './entertain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntertainPageRoutingModule
  ],
  declarations: [EntertainPage]
})
export class EntertainPageModule {}
