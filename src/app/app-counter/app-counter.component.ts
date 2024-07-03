import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styleUrl: './app-counter.component.css'
})
export class AppCounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter():void{
    this.counter = 10;
  }
}
