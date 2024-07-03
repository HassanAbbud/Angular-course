import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["spiderman", "Ironman", "Hulk", "Hawkeye"];
  public deletedHero?: string; //or deletedHero: string = "";

  deleteLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }
}
