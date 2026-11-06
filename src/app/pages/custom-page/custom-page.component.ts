import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

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

  togglePlay():boolean {
    this.toggle.update( value => !value );
    return this.toggle();
  }
}
