import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Enji Todoroki' },
      { id: 12, name: 'Hawks' },
      { id: 13, name: 'Tsunagu Hakamata' },
      { id: 14, name: 'Shinya Kamihara' },
      { id: 15, name: 'Mirko' },
      { id: 16, name: 'Crust' },
      { id: 17, name: 'Shinji Nishiya' },
      { id: 18, name: 'Wash' },
      { id: 19, name: 'Yoroi Musha' },
      { id: 20, name: 'Ryukyu' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
