import {Page, Modal, NavController, ViewController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/nutritionFacts/modal.html'
})

export class MyModal {

    viewCtrl: ViewController;
    nearByNFact: {} = {};
    selectedNFactNM: String = '';
    selectedNFactNMImage: String = '';
    constructor(viewCtrl: ViewController, params: NavParams) {
        this.viewCtrl = viewCtrl;
        this.nearByNFact = params.get('nearByNFact');
        this.selectedNFactNM = this.nearByNFact.nutritionFacts[0].name;
        this.selectedNFactNMImage= this.nearByNFact.nutritionFacts[0].image;
    }

    setChangeImage(image: String) {

		for (var tyuRow in this.nearByNFact.nutritionFacts) {
			if (this.nearByNFact.nutritionFacts[tyuRow].name == image) {
				this.selectedNFactNMImage = this.nearByNFact.nutritionFacts[tyuRow].image;
			}
		}
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
