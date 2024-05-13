import { Component, inject } from '@angular/core';
import { PathPages } from '../../shared/enums/pages.enum';
import { MODULES } from './imports/modules';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: MODULES,
})
export class HomePage {
  pathToListHeros = `/${PathPages.HERO_LIST}`;
  imgHome = '/assets/img/homeMarvelImg.png';

  private router = inject(Router);

  goToListHeros(): void {
    this.router.navigate([this.pathToListHeros]);
  }
}
