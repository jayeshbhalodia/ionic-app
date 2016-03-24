import {Page, Modal, NavController, ViewController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/payment/modal.html'
})

export class MyModal {

	showADDDollerPart: boolean = false; 
	showShoppingFromWalletPart: boolean = false;

    viewCtrl: ViewController;
    constructor(viewCtrl: ViewController, params: NavParams) {
        this.viewCtrl = viewCtrl;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    backStep() {
		this.showADDDollerPart = false;
		this.showShoppingFromWalletPart = false;	
    }

    addDollerAmount() {
		this.showADDDollerPart = true;
    }

    addShoppingFromWalletAmount () {
		this.showShoppingFromWalletPart = true;	
    }
}