import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  nombre = "";
  correo = "";
  telefono = 52;
  facebook = "";
  instagram = "";
  twitter = "";
  avatar = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  addContacto(){
    console.log('addContacto');

    const contacto = {
      nombre: this.nombre,
      correo:  this.correo,
      telefono: this.telefono,
      facebook: this.facebook,
      instagram: this.instagram,
      twitter: this.twitter,
      avatar: this.avatar
    };
    console.log(JSON.stringify(contacto));

    this.http.post('/contactos/agenda/', contacto).subscribe(data=> {
      console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error => {
      console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }
}
