import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
<<<<<<< HEAD
import {HeroService} from '../hero.service';
=======
import { HeroService } from '../hero.service';
>>>>>>> 3990739fb95f4148bbb32027cb7954f22d8830c2

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
<<<<<<< HEAD
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor(private heroService:HeroService) {
  }

  // heroes = HEROES;
=======
  constructor(private heroService: HeroService) {
  }

  //heroes = HEROES;
>>>>>>> 3990739fb95f4148bbb32027cb7954f22d8830c2
  heroes:Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes =>this.heroes = heroes);
  }

  getHeroes():void{
    this.heroes=this.heroService.getHeroes();
  } 

}
