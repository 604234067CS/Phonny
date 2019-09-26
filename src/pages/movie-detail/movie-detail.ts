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
  playing: boolean;

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

talk(textOrOptions:string){
  this.ttr.speak(textOrOptions);
}

stop(){
  this.ttr.speak("").then((value)=>{
  this.playing=false;
  });
  }

shareFace(movie){
  this.socialSharing.shareViaFacebook(movie.overview,movie.poster_path,null)
  .then(()  => {
    console.log("Post successfuly");
    this.moviedata = this.navParams.data;
}).catch((error) => {
    console.log("Fail posting")
});

}

sharetwitter(movie){
  this.socialSharing.shareViaTwitter(movie.overview,movie.poster_path,null)
  .then(()  => {
      console.log("Post successfuly");
      this.moviedata = this.navParams.data;
  }).catch((error) => {
      console.log("Fail posting")
  });
}

}

