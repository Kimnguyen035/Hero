import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { Hero } from '../../hero'
import { HeroService } from '../../services/data/hero.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  he: Hero[] = [];
  heroes: any;
  hero: Hero | undefined;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((res) => {
      // this.spinner.hide();
      if (res && res.statusCode === 1) {
        if (res.data && res.data.length === 0) {
          this.heroes = [];
          Swal.fire('Thất bại', 'Không có dữ liệu', 'warning');
        }
        else {
          this.heroes = res.data;
        }
      }
      else {
        this.heroes = [];
        Swal.fire('Thất bại', res.message, 'warning');
      }
    }, error => {
      // this.spinner.hide();
      Swal.fire('Lỗi', 'Vui lòng thử lại sau', 'warning');
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.he = this.he.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
