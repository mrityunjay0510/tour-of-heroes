import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor(private heroService:HeroService) {
  }

  // heroes = HEROES;
  heroes:Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
    
  }

  getHeroes():void{
    this.heroes=this.heroService.getHeroes();
  } 

}
