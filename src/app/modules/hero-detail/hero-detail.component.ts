import { Component, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
  hr: any;

  constructor(
    private activeModal: NgbActiveModal
  ) {}

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  ngOnInit(): void {
    // this.getHero();
  }

  goBack(): void {
    this.activeModal.close();
  }

  save(): void {
    // if (this.hero) {
    //   this.heroService.updateHero(this.hero)
    //     .subscribe(() => this.goBack());
    // }
  }
}
