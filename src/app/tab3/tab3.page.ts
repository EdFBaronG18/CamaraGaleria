import { Component } from '@angular/core';
import { MediaFile } from '@ionic-native/media-capture/ngx';
import { CamaraService } from '../servicios/camara.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  videos: MediaFile[];
  video: any;

  constructor(private camaraService: CamaraService) {
    this.videos = this.camaraService.getVideos();
  }

  verVideo() {

  }
}
