import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';

interface Componente{
  icon:string;
  name:string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes : Componente[] = [
    {
      icon:'book-outline',
      name:'Registro',
      redirecTo:'/registro'
    },
    {
      icon:'server-outline',
      name:'Categorias',
      redirecTo:'/categorias'

    },
    {
      icon:'bug-outline',
      name:'Noticias de Peliculas',
      redirecTo:'/noticias'
    },
    {
      icon: 'sunny-outline', 
      name: 'Peliculas', 
      redirecTo: '/peliculas'
  
    }
  ]

  constructor(private menuController: MenuController, 
    public alertController: AlertController,
    public navCtrl: NavController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
    
  async salir(){
      const alert = await this.alertController.create({
        header: 'Salir',
        message: '¿Deseas salir?',
        buttons: [
          {
            text: 'No, mejor no',
            handler: () => {

            }
          }, {
            text: 'Sii',
            handler: () => {
              localStorage.removeItem('ingresado');
              this.navCtrl.navigateRoot('intro');

          }
      }

        ]
      });
    
      await alert.present();
    }
  }
