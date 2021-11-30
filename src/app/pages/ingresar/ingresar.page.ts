import { AuthService, User } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  formularioLogin: FormGroup;
  
    constructor(public fb: FormBuilder,
      public alertController: AlertController,
      public navCtrl: NavController) { 
      this.formularioLogin = this.fb.group({
        'email': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      })
    }
  
    ngOnInit() {
    }

    async ingresar(){
      var f = this.formularioLogin.value;

      var usuario = JSON.parse(localStorage.getItem('usuario'));

      if(usuario.email = f.email && usuario.password == f.password){
        console.log('Ingresado');
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('inicio');
      }else{
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Los datos que ingresaste no son correctos',
          buttons: ['Aceptar']
        });
      }
      }
    }