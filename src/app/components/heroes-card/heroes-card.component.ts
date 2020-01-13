import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.css']
})
export class HeroesCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }
  
  verHeroe() {
    // console.log(  this.index );
    this.router.navigate( ['/heroe', this.index] );
  }

}
