import {Page} from 'ionic-angular';
import {cuisine} from '../cuisine/cuisine';
import {payment} from '../payment/payment';
import {Stock} from '../stock/stock';
// import {Page2} from '../page2/page2';
// import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
	this.tab1Root = cuisine;
    this.tab2Root = payment;
    this.tab3Root = Stock;
  }
}