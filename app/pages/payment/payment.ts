import {Page, Modal, NavController, ViewController} from 'ionic-angular';
import {MyModal} from './modal';

@Page({
	templateUrl: 'build/pages/payment/payment.html'
})

export class Payment { 

	readyPaymentSpin: boolean = false;
	nav: NavController;
	time: Date;

	constructor(nav: NavController) {
		this.nav = nav;
		this.time = new Date();

		setTimeout(() => {
			this.readyPaymentSpin = true;
		}, 1500);

	}
	addPaymentModal() {
		let modal = Modal.create(MyModal);
		this.nav.present(modal)
	}
}
