import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { ColorMapPipe, ColorPipe } from '../../pipes/color.pipe';
import { TitleCasePipe } from '@angular/common';
import { CreatorPipe } from '../../pipes/creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    ColorPipe,
    ColorMapPipe,
    CreatorPipe,
    TitleCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal<string>('nombre genérico');
  toggle = signal<boolean>(false);

  heroes = signal<Hero[]>(heroes);

  togglePlay():boolean {
    this.toggle.update( value => !value );
    return this.toggle();
  }
}
