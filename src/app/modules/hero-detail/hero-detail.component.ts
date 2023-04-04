import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hr: any;

  constructor(
    private activeModal: NgbActiveModal
  ) {}

  // constructor(public dialogRef: MatDialogRef<HeroDetailComponent>) { }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  ngOnInit(): void {
  }

  goBack(): void {
    this.activeModal.close();
    // this.dialogRef.close();
  }

  save(): void {
    // if (this.hero) {
    //   this.heroService.updateHero(this.hero)
    //     .subscribe(() => this.goBack());
    // }
  }
}
