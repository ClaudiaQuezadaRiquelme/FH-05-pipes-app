import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('zundamon');
  nameUpper = signal('ZUNDAMON');
  fullName  = signal('MoCHi mOcHI zuNdA');

  customDate = signal(new Date());
}
