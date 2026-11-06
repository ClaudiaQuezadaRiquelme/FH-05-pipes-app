import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
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
