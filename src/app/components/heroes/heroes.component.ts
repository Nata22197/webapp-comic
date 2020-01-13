import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { Observable } from 'rxjs';
//services
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Observable<Heroe[]>;
  
  constructor( private _heroesService:HeroesService,
               private router:Router ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes );
  }

  verHeroe(idx:number) {
    this.router.navigate( ['/heroe',idx] );
  }

}
