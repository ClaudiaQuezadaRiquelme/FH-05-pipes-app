import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { ColorMapPipe, ColorPipe } from '../../pipes/color.pipe';
import { TitleCasePipe } from '@angular/common';
import { CreatorPipe } from '../../pipes/creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    ColorPipe,
    ColorMapPipe,
    CreatorPipe,
    TitleCasePipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal<string>('nombre genérico');
  toggle = signal<boolean>(false);
  heroes = signal<Hero[]>(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal<string>('');

  togglePlay():boolean {
    this.toggle.update( value => !value );
    return this.toggle();
  }
}
