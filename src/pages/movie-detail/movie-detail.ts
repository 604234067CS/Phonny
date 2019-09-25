import { VideoPage } from './../video/video';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';




/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  moviedata:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ttr : TextToSpeech,
    private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.moviedata = this.navParams.data;
    console.log(this.moviedata);
  }
  openVideo(movie){
    this.navCtrl.push("VideoPage",movie);
}

 talk(textOrOptions){
   console.log(textOrOptions);
  this.ttr.speak(textOrOptions)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}
stop(){
  this.ttr.stop();
}

shareFace(movie){
  this.socialSharing.shareViaTwitter(movie.overview,movie.poster_path.movie.VideoPage);

}

sharetwitter(movie){
  this.socialSharing.shareViaFacebook(movie.overview,movie.poster_path.movie.VideoPage);
}

shareInstagram(movie){
  this.socialSharing.shareViaInstagram(movie.overview,movie.poster_path.movie.HomePage);
}

shareWhatsApp(movie){
  this.socialSharing.shareViaWhatsApp(movie.overview,movie.poster_path.movie.HomePage)
}
}
