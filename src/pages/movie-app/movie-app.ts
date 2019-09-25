
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiKeysProvider } from '../../providers/api-keys/api-keys';

/**
 * Generated class for the MovieAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-app',
  templateUrl: 'movie-app.html',
})
export class MovieAppPage {

  moviesArray: any[];
  moviesArray1: any[];
  moviesArray2: any[];
  moviesArray3: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private movie : ApiKeysProvider) {
    this.loadLetest();
    this.loadLetest1();
    this.loadLetest2();
    this.loadLetest3();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieAppPage');
  }

  loadLetest(){
    this.movie.getMoiveNowplaying().subscribe(movies => {
      this.moviesArray = movies['results'];
      console.log(movies);
    });
  }


  loadLetest1(){
    this.movie.getMoivePopular().subscribe(movies => {
      this.moviesArray1 = movies['results'];
      console.log(movies);
    });
  }

  loadLetest2(){
    this.movie.getMoiveToprated().subscribe(movies => {
      this.moviesArray2 = movies['results'];
      console.log(movies);
    });
  }


  loadLetest3(){
    this.movie.getMoiveUpcoming().subscribe(movies => {
      this.moviesArray3 = movies['results'];
      console.log(movies);
    });
  }

  getDetails(movie){
    this.navCtrl.push("MovieDetailPage",movie);
  }

  getItems(ev: any){
    //const val = ev.target.value;
    let val = ev.target.value;
    if (val != 0) {
      this.movie.searchMovie(val).subscribe(movies => {
        this.moviesArray = movies['results'];
      });
      this.movie.searchMovie(val).subscribe(movies => {
        this.moviesArray1 = movies['results'];
      });
      this.movie.searchMovie(val).subscribe(movies => {
        this.moviesArray2 = movies['results'];
      });
      this.movie.searchMovie(val).subscribe(movies => {
        this.moviesArray3 = movies['results'];
      });
    }else {
      this.loadLetest()
      this.loadLetest1()
      this.loadLetest2()
      this.loadLetest3()
  }
  }
}
