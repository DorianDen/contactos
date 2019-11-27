import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
  nombre: '';
  correo: '';
  tel: '';
  facebook = '';
  instagram = '';
  twitter = '';
  avatar = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = navParams.get('nombre');
    this.correo = navParams.get('correo');
    this.tel = navParams.get('tel');
    this.facebook = navParams.get('facebook');
    this.instagram = navParams.get('instagram');
    this.twitter = navParams.get('twitter');
    this.avatar = navParams.get('avatar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

}
