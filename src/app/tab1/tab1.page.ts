import { Component } from '@angular/core';
import { CamaraService } from '../servicios/camara.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fotos: Array<any>;

  constructor(private camaraService: CamaraService) {
    this.fotos = this.camaraService.getFotos();
  }
}
