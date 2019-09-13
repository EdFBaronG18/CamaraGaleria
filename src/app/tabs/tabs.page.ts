import { Component } from '@angular/core';
import { CamaraService } from '../servicios/camara.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  numVideos: number;
  numFotos: number;

  constructor(private camaraService: CamaraService) {
    this.numFotos = this.camaraService.getNumFotos();
    this.numVideos = this.camaraService.getNumVideos();
  }

  ionViewDidEnter() {
    this.numFotos = this.camaraService.getNumFotos();
    this.numVideos = this.camaraService.getNumVideos();
  }

  badge() {
    this.numFotos = this.camaraService.getNumFotos();
    console.log('Fotos', this.camaraService.getFotos());
  }

  badge2() {
    this.numVideos = this.camaraService.getNumVideos();
    console.log('Videos', this.camaraService.getVideos());
  }
}
