import { Component } from '@angular/core';
import { Character } from '../interfaces/charcter.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: "Krillin",
    power: 5000
  },{
    name: "Goku",
    power: 9500
  },{
    name: "Trunks",
    power: 50
  }];

  onNewCharacterFunction(character: Character) {
    console.log("Main")
    console.log(character);
  }

}
