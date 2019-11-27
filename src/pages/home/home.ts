import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {ContactoPage} from "../contacto/contacto";
import {MostrarPage} from "../mostrar/mostrar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos: any;
  contactoPage = ContactoPage;
  mostrarPage = MostrarPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    /*this.http.get('/contactos/agenda/').subscribe(data => {
      this.contactos = data;
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    });*/
  }

  ionViewWillEnter(){
    this.http.get('/contactos/agenda/').subscribe(data => {
      this.contactos = data;
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  clickAdd(){
    console.log('clickAdd');
    this.navCtrl.push(this.contactoPage);
  }

  clikContacto(nombre, correo, tel, facebook, instagram, twitter, avatar){
  this.navCtrl.push(this.mostrarPage, {nombre: nombre, correo: correo, tel: tel, facebook: facebook, instagram: instagram, twitter: twitter, avatar: avatar});
  }

}
