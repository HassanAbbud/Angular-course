import { NgModule } from '@angular/core';


import { AppCounterComponent } from '../app-counter.component';



@NgModule({
  exports: [AppCounterComponent],
  declarations: [AppCounterComponent],
})
export class CounterModule { }
