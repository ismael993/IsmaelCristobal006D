import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  [x: string]: any;

  formularioRegistro: FormGroup;
  
    constructor(public fb: FormBuilder, 
      public alertController: AlertController,
      public navCtrl: NavController){
      this.formularioRegistro = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'email': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required),
        'confirmacionPassword': new FormControl("",Validators.required)
      })
    }

  ngOnInit() {
  }

  async guardar(){
    console.log('Guardar')
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['Aceptar']
        });
      
        await alert.present();
        return;
      }

      var usuario = {
        nombre: f.nombre,
        email: f.email,
        password: f.password
      }

      localStorage.setItem('usuario',JSON.stringify(usuario));

      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    }
    
  }


