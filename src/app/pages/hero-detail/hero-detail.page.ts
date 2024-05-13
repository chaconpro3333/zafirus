import { Component, OnDestroy, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MODULES } from './imports/modules';
import { HeroService } from 'src/app/core/services/hero.service';
import { IntHero } from 'src/app/core/schemas/heros/heros.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  standalone: true,
  imports: MODULES,
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailPage implements OnInit, OnDestroy {
  titleHeadBar = '';
  pathImage = '';
  selectedHero: IntHero | undefined = {} as IntHero;

  private heroService = inject(HeroService);
  private subscriptions = new Subscription();

  ngOnInit() {
    this.getHero();
  }

  private getHero(): void {
    this.subscriptions.add(
      this.heroService.getSelectedHero().subscribe((value) => {
        this.selectedHero = value;
        this.titleHeadBar = value?.name ?? '';
        this.pathImage =
          value?.thumbnail?.path && value?.thumbnail?.extension
            ? `${value?.thumbnail?.path}.${value?.thumbnail?.extension}`
            : '';
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
