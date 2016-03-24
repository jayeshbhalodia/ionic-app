import {Page, Modal, NavController, ViewController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/nutritionFacts/modal.html'
})

export class MyModal {

    viewCtrl: ViewController;
    nearByNFact: {} = {};
    constructor(viewCtrl: ViewController, params: NavParams) {
        this.viewCtrl = viewCtrl;
        this.nearByNFact = params.get('nearByNFact');	

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
