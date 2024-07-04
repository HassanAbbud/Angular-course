import { Injectable } from '@angular/core';
import { Character } from '../interfaces/charcter.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 5000
  },{
    id: uuid(),
    name: "Goku",
    power: 9500
  },{
    id: uuid(),
    name: "Trunks",
    power: 50
  }];

  addCharacter(character: Character) {
    const newCharacter:Character = {id:uuid(), ...character};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
    // this.characters.splice(id,1);
  }
}
