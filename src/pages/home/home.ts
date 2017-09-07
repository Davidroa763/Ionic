import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  }
  
  alerta(){
    let alert = this.alertCtrl.create({
      title: 'Titulo de la Alerta!',
      subTitle: 'Mensaje!!!!',
      buttons: ['OK']
    });
    alert.present();
  }
  alerta2(){
    let alert2 = this.alertCtrl.create({
      title: 'Login!',
      subTitle: 'Mensaje!!!!',
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log ('Cancelar clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log ('Guardar clicked');
          }
        }
      ]
    });
    alert2.present();
  }
}
