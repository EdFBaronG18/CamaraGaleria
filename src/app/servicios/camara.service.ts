import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {
  fotos: Array<any>;
  videos: Array<any>;

  constructor() {
    this.fotos = [];
    this.videos = [];
  }

  getFotos(): Array<any> {
    return this.fotos;
  }

  getVideos(): Array<any> {
    return this.videos;
  }

  setFoto(foto: any) {
    if (foto !== null && foto !== undefined && foto !== '') {
      this.fotos.push(foto);
      console.log(foto);

      return 'Foto agregada a la galeria';
    }
    console.log(foto);
    return 'Error! No hay foto tomada';
  }

  setVideo(video: any) {
    if (video !== null && video !== undefined && video !== '') {
      this.fotos.push(video);
      console.log(video);

      return 'Video agregado a la galeria';
    }
    console.log(video);
    return 'Error! No hay video tomado';
  }

  getNumFotos() {
    return this.fotos.length;
  }
}
