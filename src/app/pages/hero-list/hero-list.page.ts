import {
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { MODULES } from './imports/modules';
import { HeroService } from 'src/app/core/services/hero.service';
import { IntHero } from 'src/app/core/schemas/heros/heros.interface';
import { PathPages } from 'src/app/shared/enums/pages.enum';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
  standalone: true,
  imports: MODULES,
  encapsulation: ViewEncapsulation.None
})
export class HeroListPage implements OnInit {
  heros: IntHero[] = [];
  isLoading = false;
  rowsLimits = 20;
  private offset: number = 0;
  private limit: number = 10;
  private heroService = inject(HeroService);
  private router = inject(Router);

  ngOnInit(): void {
    this.isLoading = true;
    this.loadMarvelHeros(null);
  }

  async loadMarvelHeros(event: any): Promise<void> {
    this.heroService
      .getMarvelHeros(this.limit, this.offset)
     .then((heros) => {
        this.heros = [...this.heros, ...heros];
        if (event) {
          event.target.complete();
        }
        this.isLoading = false;
        this.offset += this.limit;
      });
  }

  goToDetail(item: IntHero): void {
    this.heroService.setSelectedHero(item);
    this.router.navigate([`/${PathPages.HERO_DETAIL}`]);
  }
}
