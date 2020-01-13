import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Heroe } from "../interfaces/heroe.interface";
import { LOCAL_API_URL } from "../config/url.services";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  heroes: any[] = [];
  constructor(private http: HttpClient) {
    this.saveHeroes();
  }

  getHeroes() {
    return this.http.get<Heroe[]>(LOCAL_API_URL + "heroes.json");
  }

  searchHeroes(termino: string) {
    let heroesArr: any[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
          heroe.idx = i;
          heroesArr.push(heroe);
      }
    }

    return heroesArr;
  }

  getHeroe(idx: string) {
    return this.heroes[idx];
  }

  saveHeroes() {
    let heroes:any []; 
    this.http.get<Heroe[]>(LOCAL_API_URL + "heroes.json")
    .subscribe(response => {
      heroes = response;
      localStorage.setItem('heroes', JSON.stringify(heroes));
      this.heroes = JSON.parse(localStorage.getItem('heroes'));
    });
  }
}
