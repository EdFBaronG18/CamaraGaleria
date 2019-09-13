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
  }

  ionViewDidEnter() {
    this.numFotos = this.camaraService.getNumFotos();
  }

  badge(){
    this.numFotos = this.camaraService.getNumFotos();
  }

  badge2() {
    this.numVideos = this.camaraService.getNumVideos();
  }
}
