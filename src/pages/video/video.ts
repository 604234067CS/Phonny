import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiKeysProvider } from '../../providers/api-keys/api-keys';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  movieVideo:any=[];
  videos:any=[];
  movie:any;
  url = 'https://www.youtube.com/watch?v=';

  constructor(public navCtrl: NavController, public navParams: NavParams,private movieAPi : ApiKeysProvider,
    public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    this.movieVideo = this.navParams.data;
    this.movieAPi.getVideos(this.movieVideo).subscribe((movie_data:any=[])=>{
     console.log(this.movieVideo);
      this.videos=movie_data['results'];
      console.log(this.videos);
    });
}

getVideo(keyOpen){
  let dangerousVideoUrl = 'https://www.youtube.com/embed/' + keyOpen + '?rel=0&showinfo=0';
  return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
 }

}
