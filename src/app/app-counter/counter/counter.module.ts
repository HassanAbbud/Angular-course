import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCounterComponent } from '../app-counter.component';



@NgModule({
  exports: [AppCounterComponent],
  declarations: [AppCounterComponent],
})
export class CounterModule { }
