import { Component } from '@angular/core';
import { CamaraService } from '../servicios/camara.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fotos: Array<any>;

  constructor(private camaraService: CamaraService, private visor: PhotoViewer) {
    this.fotos = this.camaraService.getFotos();
    console.log(this.fotos);
  }

  verFoto(foto: any) {
    this.visor.show(foto, '', {share: true});
  }
}
