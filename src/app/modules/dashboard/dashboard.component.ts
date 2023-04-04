import { Component, OnInit } from '@angular/core';
// import { Hero } from '../../hero';
import { HeroService } from '../../services/data/hero.service';
import Swal from "sweetalert2";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MatDialog } from '@angular/material/dialog';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: any;

  constructor(private heroService: HeroService, private modalService: NgbModal, private spinner: NgxSpinnerService) { }
  // constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.spinner.show();
    this.heroService.getHeroes().subscribe((res) => {
      // this.spinner.hide();
      if (res && res.statusCode === 1) {
        if (res.data && res.data.length === 0) {
          this.heroes = [];
          Swal.fire('Thất bại', 'Không có dữ liệu', 'warning');
        }
        else {
          this.heroes = res.data.slice(0, 4);
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

  getHero(hero: any) {
    const id = Number(hero.id);
    // this.spinner.show();
    this.heroService.getHero(id).subscribe((res) => {
      // this.spinner.hide();
      if (res && res.statusCode === 1) {
        const modalRef = this.modalService.open(HeroDetailComponent, { size: 'lg' });
        modalRef.componentInstance.hr = Object.assign(hero, res.data);
        // const dialogRef = this.dialog.open(HeroDetailComponent, {
        //   width: '500px',
        //   height: '500px'
        // });
        // dialogRef.componentInstance.hr = Object.assign(hero, res.data);
      }
      else {
        Swal.fire('Thất bại', res.message, 'warning');
      }
    }, error => {
      // this.spinner.hide();
      Swal.fire('Lỗi', 'Vui lòng thử lại sau', 'error');
    });
  }
}
