import { Component } from '@angular/core';

import { App, MenuController } from 'ionic-angular';


@Component({
  selector: 'menus',
  templateUrl: 'menu.html'
})
export class MenuPage {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }
}

@Component({
  selector: 'menu1',
  template: `
<ion-menu [content]="content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <div>
    <ion-list>
      <button ion-item>
        Home
      </button>
      <button ion-item>
        Friends
      </button>
      <button ion-item>
        Events
      </button>
      <button ion-item>
        Close Menu
      </button>
    </ion-list>
  </div>
</ion-menu>

<ion-nav id="nav" #content></ion-nav>
`
})
export class PageOne { }

//@Component({
//  selector: 'menu2',
//  template: `
//<ion-header>
//  <ion-navbar>
//    <button ion-button menuToggle icon-only>
//      <ion-icon name='menu'></ion-icon>
//    </button>
//    <ion-title>
//      Friends
//    </ion-title>
//  </ion-navbar>
//</ion-header>
//<div>
//  <button ion-button block menuToggle>Toggle Menu</button>
//</div>
//`
//})
//export class PageTwo { }

//@Component({
//  selector: 'menu3',
//  template: `
//<ion-header>
//  <ion-navbar>
//    <button ion-button menuToggle icon-only>
//      <ion-icon name='menu'></ion-icon>
//    </button>
//    <ion-title>
//      Events
//    </ion-title>
//  </ion-navbar>
//</ion-header>
//<div>
//  <button ion-button block menuToggle>Toggle Menu</button>
//</div>
//`
//})
//export class PageThree { }
