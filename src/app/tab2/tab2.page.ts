import { Component } from '@angular/core';
import { CamaraService } from '../servicios/camara.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mensaje: any;
  foto: any;
  video: any;

  constructor(private camaraService: CamaraService) {}

  takeFoto() {
    this.foto = 'https://tech.tribalyte.eu/wp-content/uploads/2018/05/ionic-500x500.png';
    this.mensaje = this.camaraService.setFoto(this.foto);
    console.log(this.camaraService.getNumFotos());
    
    console.log(this.mensaje);
    this.foto = null;
  }

  takeVideo() {
    this.mensaje = this.camaraService.setVideo(this.video);
    console.log(this.mensaje);
    this.video = null;
  }
  verVideo() {}
}
