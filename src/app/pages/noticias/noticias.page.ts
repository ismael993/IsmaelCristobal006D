import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { GetDataHead, Forecast } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  forecast: Forecast[] = []
  temperatura: GetDataHead

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp=>{
      console.log('noticias', resp);
      //push permite añadir al arreglo cada objeto de noticias obtenidas
    this.forecast.push(...resp.forecast);
    this.temperatura=resp
    });
  }

}
