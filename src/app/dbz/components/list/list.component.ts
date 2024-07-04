import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charcter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteId = new EventEmitter<string>;


  public emitId(id?:string): void{
    //emitir ID de personaje
    if(!id) return;
    this.onDeleteId.emit(id);
    console.log(id);
  }

}
