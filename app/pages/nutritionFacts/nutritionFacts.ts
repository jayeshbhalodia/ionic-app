import {Page, Modal, NavController, ViewController} from 'ionic-angular';
import {MyModal} from './modal';

@Page({
	templateUrl: 'build/pages/nutritionFacts/nutritionFacts.html'
})
export class NutritionFacts {

	readyNFactSpin: boolean = false;
	readNFact: [] = [];
	nearByNFact: {} = {};
	nav: NavController;
	constructor(nav: NavController) {
		this.nav = nav;

		this.readNFact = [{
			name: 'Apple',
			type: 'Fruite',
			description: 'The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.',
			image: ['nf1.jpeg', 'nf2.jpeg', 'nf3.jpeg'],
			nutritionFacts: [{
				name: 'apple',
				image: 'nf1.jpeg',
				amountPer: '100 grams',
				calories: 52,
				vitaminA: 1,
				calcium: 0,
				vitaminD: 0,
				vitaminB12: 0,
				vitaminC: 7,
				iron: 0,
				vitaminB6: 0,
				magnesium: 1,
				sodium: {
					text: '1mg',
					per: 0
				},
				potassium: {
					text: '107mg',
					per: 3
				},
				protein: {
					text: '0.3g',
					per: 0
				},
				total_carbohydrate: {
					text: '14g',
					per: 4,
					tc_1: {
							name: 'Dietary fiber',
							text: '2.4g',
							per: 9
						},

					tc_2: {
						name: 'Sugar',
						text: '10g',
						per: 0
					}
				},
				cholesterol: {
					text: '0mg',
					per: 0
				},
				totelFat: {
					text: '0.2mg',
					per: 0,
					tf_1: {
						name: 'Saturated fat',
						text: '0g',
						per: 0
					},
					tf_2: {
						name: 'Polyunsaturated fat',
						text: '0.1g',
						per: 0
					},
					tf_3: {
						name: 'Monounsaturated fat',
						text: '0g',
						per: 0
					}
				}
			}, {
				name: 'appleJuice_unsweetened',
				image: 'nf2.jpeg',
				amountPer: '100 grams',
				calories: 46,
				vitaminA: 0,
				calcium: 0,
				vitaminD: 0,
				vitaminB12: 0,
				vitaminC: 1,
				iron: 0,
				vitaminB6: 0,
				magnesium: 1,
				sodium: {
					text: '4mg',
					per: 0
				},
				potassium: {
					text: '101mg',
					per: 2
				},
				protein: {
					text: '0.1g',
					per: 0
				},
				total_carbohydrate: {
					text: '11g',
					per: 3,
					tc_1: {
						name: 'Dietary fiber',
						text: '0.2g',
						per: 0
					},
					tc_2: {
						name: 'Sugar',
						text: '10g',
						per: 0
					}
				},
				cholesterol: {
					text: '0mg',
					per: 0
				},
				totelFat: {
					text: '0.1g',
					per: 0,
					tf_1: {
						name: 'Saturated fat',
						text: '0g',
						per: 0
					},
					tf_2: {
						name: 'Polyunsaturated fat',
						text: '0g',
						per: 0
					},
					tf_3: {
						name: 'Monounsaturated fat',
						text: '0g',
						per: 0
					}
				}
			}]
		}];

		setTimeout(() => {
			this.readyNFactSpin = true;
		}, 1500);

	}
	viewNFactModal(nearbyNFact: {}) {
		this.nearByNFact = Object.assign({}, nearbyNFact);
		let modal = Modal.create(MyModal, { nearByNFact: this.nearByNFact });
		this.nav.present(modal)
	}
}
