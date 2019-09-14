import { Component, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CaptureError, CaptureImageOptions, MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { ToastController } from '@ionic/angular';
import { CamaraService } from '../servicios/camara.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  mensaje: any;
  foto: any;
  video: any;

  constructor(
    private camaraService: CamaraService,
    private camera: Camera,
    private mediaCapture: MediaCapture,
    private toast: ToastController,
    private visor: PhotoViewer
  ) {}

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
        if (this.camaraService.setFoto(this.foto)) {
          this.msjVideo('Foto agregada a la galeria de fotos');
        }
      },
      err => {
        this.msjVideo('Error al guardar foto');
        console.log('Error al guardar la foto.');
      }
    );
  }

  takeVideo() {
    const options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureVideo(options).then(
      (data: MediaFile[]) => {
        this.video = data;
        if (this.camaraService.setVideo(this.video)) {
          this.msjVideo('El video fue agregado a la galeria de videos');
          console.log(data);
        }
      },
      (err: CaptureError) => this.msjVideo('Error al agregar el video')
    );
  }

  async msjVideo(msj: string) {
    const toast = await this.toast.create({
      animated: true,
      position: 'top',
      message: msj,
      duration: 2000
    });
    toast.present();
  }

  verGrande(foto: any) {
      this.visor.show(foto, '', {share: true});
  }
}
