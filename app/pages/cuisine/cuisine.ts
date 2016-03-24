import {Page, Modal, NavController, ViewController} from 'ionic-angular';
import {MyModal} from './modal';

@Page({
	templateUrl: 'build/pages/cuisine/cuisine.html'
})
export class Cuisine {

	readyCuisineSpin: boolean = false;
	nav: NavController;

	constructor(nav: NavController) {
		this.nav = nav;

		setTimeout(() => {
			this.readyCuisineSpin = true;
		}, 1500);

	}
	addCuisineModal() {
		let modal = Modal.create(MyModal);
		this.nav.present(modal)
	}
}
