import {Page, Modal, NavController, ViewController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/cuisine/modal.html'
})

export class MyModal {

    viewCtrl: ViewController;

    constructor(viewCtrl: ViewController, params: NavParams) {
        this.viewCtrl = viewCtrl;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
