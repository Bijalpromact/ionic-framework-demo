import { Component } from '@angular/core';


@Component({
  selector: 'basic-list',
  templateUrl: 'basic-list.html'
})
export class BasicListPage {
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',  
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
