import { Component } from '@angular/core';
import { MediaFile } from '@ionic-native/media-capture/ngx';
import { CamaraService } from '../servicios/camara.service';
import {
  StreamingMedia,
  StreamingVideoOptions
} from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  videos: MediaFile[];
  video: any;

  constructor(
    private camaraService: CamaraService,
    private repro: StreamingMedia
  ) {
    this.videos = this.camaraService.getVideos();
  }

  verVideo(video: MediaFile[]) {
    const options: StreamingVideoOptions = {
      successCallback: () => {
        console.log('Video played');
      },
      errorCallback: e => {
        console.log('Error streaming');
      },
      orientation: 'portrait',
      shouldAutoClose: true,
      controls: false
    };
    this.repro.playVideo(video[0].fullPath, options);
  }
}
