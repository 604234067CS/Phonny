import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ApiKeysProvider } from '../../providers/api-keys/api-keys';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private ttr : TextToSpeech) {
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


}
