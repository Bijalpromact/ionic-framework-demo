import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';


@Component({
    selector: 'alert',
    templateUrl: 'alert.html'
})
export class Alert {

    constructor(public alerCtrl: AlertController) { }

    /* basic Alert */
    doAlert() {
        let alert = this.alerCtrl.create({
            title: 'New Friend!',
            message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
            buttons: ['Ok']
        });
        alert.present()
    }

    /* Prompt Alert */
    doAlertprompt() {
        let prompt = this.alerCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }


    /* Confirmation Alert */
    doConfirm() {
        let confirm = this.alerCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present()
    }
}
