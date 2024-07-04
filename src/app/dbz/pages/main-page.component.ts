import { Component } from '@angular/core';
import { Character } from '../interfaces/charcter.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService){}
  public get getCharacters() : Character[] {
    return [...this.dbzService.characters]
  }

  public OnDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }
  public onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }
}
