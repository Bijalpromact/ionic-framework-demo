import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SignoutPage } from '../pages/signout/signout';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*Action-sheet added*/
import { ActionSheet } from '../pages/action-sheet/action-sheet';
/*alert added*/
import { Alert } from '../pages/alert/alert';
/*badges added*/
import { Badges } from '../pages/badges/badges';
/*badges added*/
import { IonButton } from '../pages/ion-button/ion-button';
/*card added*/
import { Card } from '../pages/card/card';
/*checkbox added*/
import { Checkbox } from '../pages/checkbox/checkbox';
/*checkbox added*/
import { DateTime } from '../pages/date-time/date-time';
/*feature added for more functionality*/
import { Feature } from '../pages/feature/feature';
/*feature added for more fabs*/
import { Fabs } from '../pages/fabs/fabs';
/*feature added for more Gesture events*/
import { Gestures } from '../pages/gestures/gestures';
/*feature added for more Grid events*/
import { Grid } from '../pages/grid/grid';
/*feature added for more icon-set-demo*/
import { IconSet } from '../pages/icon-set-demo/icon-set';
/*feature added for more fixed-input*/
import { FixedInlinelabel } from '../pages/inputs/fixed-inline-label/fixed-inline-label';
/*feature added for more floating-label*/
import { FloatingLabel } from '../pages/inputs/floating-label/floating-label';
/*feature added for more floating-label*/
import { InlineLabel } from '../pages/inputs/inline-label/inline-label';
/*feature added for more placeholder-label*/
import { PlaceholderLabel } from '../pages/inputs/placeholder-label/placeholder-label';
/*feature added for more stacked-label*/
import { StackedLabel } from '../pages/inputs/stacked-label/stacked';
/* Basic List Page */
import { BasicListPage } from '../pages/list/basic-list/basic-list';
/* Loader */
import { Loaderpage } from '../pages/loader/loader';
import { MenuPage, PageOne } from '../pages/menu/menu';
import { ModalPage, ModalContentPage } from '../pages/modal/modal';
import { BasicProverPage, PopoverPage } from '../pages/prover/prover';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { SearchbarPage } from '../pages/search-bar/searchbar';
import { BlogPage } from '../pages/blog/blog';
import { Slides } from '../pages/slides/slides';
import { ToastPage } from '../pages/toast/toast';
import { TogglePage } from '../pages/toggle/toggle';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TogglePage,
    ToastPage,
    HomePage,
    BlogPage,
    TabsPage,
    SignoutPage,
    BasicListPage,
    Loaderpage,
    ActionSheet,
    Slides,
    Alert,
    Badges,
    IonButton,
    Card,
    Checkbox,
    DateTime,
    Feature,
    Fabs,
    Gestures,
    Grid,
    IconSet,
    FixedInlinelabel,
    FloatingLabel,
    InlineLabel,
    PlaceholderLabel,
    StackedLabel,
    MenuPage,
    PageOne,
    ModalPage,
    ModalContentPage,
    BasicProverPage,
    PopoverPage,
    RadioPage,
    RangePage,
    SearchbarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BlogPage,
    ToastPage,
    TabsPage,
    TogglePage,
    SignoutPage,
    ActionSheet,
    Alert,
    Feature,
    ModalContentPage,
    BasicProverPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
