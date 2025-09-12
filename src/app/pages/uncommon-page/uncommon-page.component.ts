import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'José',
  gender: 'autista',
  age: 28,
  address: 'HongKong, China'
}
const client2 = {
  name: 'Alys',
  gender: 'vocaloid',
  age: 23,
  address: 'París, Francia'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent, I18nSelectPipe
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18n Select
  client = signal(client1);

  invitationMap = {
    autista: 'invitarlo',
    vocaloid: 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
}
