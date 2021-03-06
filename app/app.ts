import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {Payment} from './pages/payment/payment';
import {TabsPage} from './pages/tabs/tabs';
import {Stock} from './pages/stock/stock';
import {MyModal} from './pages/cuisine/modal';
import {Cuisine} from './pages/cuisine/cuisine';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {

    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
