import {Page} from 'ionic-angular';
import {Cuisine} from '../cuisine/cuisine';
import {Payment} from '../payment/payment';
import {Stock} from '../stock/stock';
// import {Page2} from '../page2/page2';
// import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {

	tab1Root : Cuisine;
	tab2Root: Payment;
	tab3Root: Stock;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page

    this.tab2Root = Payment;
    this.tab3Root = Stock;
    this.tab1Root = Cuisine;
  }
}
