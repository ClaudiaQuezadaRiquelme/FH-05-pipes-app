import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
    CardComponent, I18nSelectPipe, I18nPluralPipe
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


  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemosun par de clientes esperando',
    other: 'tenemos # clientes esperando',
  })

  clients = signal([
    "Butterfree",
    "Beedrill",
    "Pidgeot",
    "Rattata",
    "Ivysaur",
    "Charmander",
    "Squirtle",
  ]);

  deleteBeing() {
    this.clients.update( prev => prev.slice(1));
  }
}
