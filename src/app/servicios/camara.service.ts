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
      this.fotos.unshift(foto);
      console.log(foto);

      return 'Foto agregada a la galeria';
    }
    console.log(foto);
    return 'Error! No hay foto tomada';
  }

  setVideo(video: any): boolean {
    if (video !== null && video !== undefined && video !== '') {
      this.videos.unshift(video);
      console.log(video);
      return true;
    }
    console.log(video);
    return false;
  }

  getNumFotos() {
    return this.fotos.length;
  }

  getNumVideos() {
    return this.videos.length;
  }
}
