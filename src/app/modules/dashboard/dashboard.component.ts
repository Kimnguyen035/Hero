import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/data/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHe()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
