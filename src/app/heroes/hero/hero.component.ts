import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Iron man';
  public age: number = 45;

  get capitalizedName() {
    return this.name.toUpperCase();
  }
  //TODO
  public setName():void {
    this.name = "Spider man";
  }
  public setAge():void {
    this.age = 25;
  }
  public getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }
  public resetForm():void {
    this.name = 'Iron man';
    this.age = 45;
  }
}
