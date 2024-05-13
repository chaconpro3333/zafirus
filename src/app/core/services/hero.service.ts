import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IntHero } from '../schemas/heros/heros.interface';
import { BaseApiRest } from './classes/base-class-api-rest';

@Injectable({
  providedIn: 'root',
})
export class HeroService extends BaseApiRest {
  private allHerosCache: IntHero[] = [];
  private limitRows = 20;
  private selectedHero = new BehaviorSubject<IntHero>({} as IntHero);

  async getMarvelHeros(limit = 10, offset = 0): Promise<IntHero[]> {
    const url = environment.url.characters;
    const params = {
      apikey: environment.apiKey,
      limit: limit.toString(),
      offset: offset.toString()
    };

    if(this.allHerosCache?.length && this.allHerosCache?.length === this.limitRows){
      return this.allHerosCache;
    }
    const response = await this.get<IntHero>(url, params );
    this.allHerosCache = [...this.allHerosCache, ...response.data.results];
    return response.data.results;
  }

  getSelectedHero(): Observable<IntHero> {
    return this.selectedHero.asObservable();
  }

  setSelectedHero(hero: IntHero): void {
    this.selectedHero.next(hero);
  }
}
