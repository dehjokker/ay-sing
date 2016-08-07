import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AlertController, AlertOptions } from 'ionic-angular/components';

@Component({
  templateUrl: 'build/pages/numpad/numpad.html'
})
export class NumpadPage {
  number: string;

  constructor(private navCtrl: NavController, private alertController: AlertController) {
    this.number = '';
  }

  enterDigit(digit) {
    if (this.number.length < 3) {
      this.number += digit;
    }
  }

  clearInput() {
    this.number = "";
  }

  backspace() {
    this.number = this.number.slice(0, this.number.length - 1);
  }

  go() {
    if (Number(this.number) > 214) {
      this.clearInput();
      this.alertController.create({
        title: 'Sorry',
        subTitle: 'The song could not be found.',
        buttons: ['OK']
      }).present();
    } else {
      // Lookup hymn
    }
  }
}
