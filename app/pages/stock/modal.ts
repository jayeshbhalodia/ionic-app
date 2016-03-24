import {Page, Modal, NavController, ViewController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/stock/modal.html'
})

export class ShoppingModal {

    viewCtrl: ViewController;
    constructor(viewCtrl: ViewController, params: NavParams) {
        this.viewCtrl = viewCtrl;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
