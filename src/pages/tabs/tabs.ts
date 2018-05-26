import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SignoutPage } from '../signout/signout';
import { Feature } from '../feature/feature';
import { BlogPage } from '../blog/blog';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Feature;
  tab0Root = SignoutPage;
  tab5Root = BlogPage;

  constructor() {

  }
}
