import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: ICharacter[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public addCharacter(character: ICharacter): void {
    const newCharacter: ICharacter = {
      ...character,
      id: uuid()
    }

    this.characters.push(character);
  }

  //public onDeleteCharacter(index: number): void {
  //  this.characters.splice(index, 1);
  //}

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
