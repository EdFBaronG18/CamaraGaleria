import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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

  constructor(private camaraService: CamaraService, private camera: Camera) {}

  takeFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.foto = 'data:image/jpeg;base64,' + imageData;
        this.mensaje = this.camaraService.setFoto(this.foto);
      },
      err => {
        console.log('Error al tomar la foto.');
      }
    );
  }

  takeVideo() {
    this.mensaje = this.camaraService.setVideo(this.video);
    console.log(this.mensaje);
    this.video = null;
  }
  verVideo() {}
}
