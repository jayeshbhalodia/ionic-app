import {Page, Modal, NavController, ViewController} from 'ionic-angular';
import {ShoppingModal} from './modal';

@Page({
	templateUrl: 'build/pages/stock/stock.html'
})
export class Stock {
	readySoppingSpin: boolean = false;
	nav: NavController;

	constructor(nav: NavController) {
		this.nav = nav;

		setTimeout(() => {
			this.readySoppingSpin = true;
		}, 1500);

	}
	addShoppingModal() {
		let modal = Modal.create(ShoppingModal);
		this.nav.present(modal)
	}
}
