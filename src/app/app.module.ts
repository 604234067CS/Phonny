import { MovieAppPage } from './../pages/movie-app/movie-app';
import {HttpClientModule} from '@angular/common/http';
import { PostJsonPage } from './../pages/post-json/post-json';
import { SimpleJsonPage } from './../pages/simple-json/simple-json';
import { ArrayJsonPage } from './../pages/array-json/array-json';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { FlashPage } from './../pages/flash/flash';
import { LoginPage } from './../pages/login/login';
import { BarcodescanPage } from './../pages/barcodescan/barcodescan';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Flashlight } from '@ionic-native/flashlight';
import { BatteryStatus } from '@ionic-native/battery-status';
import { ApiKeysProvider } from '../providers/api-keys/api-keys';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BarcodescanPage,
    LoginPage,
    FlashPage,
    JsonMenuPage,
    ArrayJsonPage,
    SimpleJsonPage,
    PostJsonPage,
    MovieAppPage,
    
    

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BarcodescanPage,
    LoginPage,
    FlashPage,
    JsonMenuPage,
    ArrayJsonPage,
    SimpleJsonPage,
    PostJsonPage,
    MovieAppPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Flashlight,BatteryStatus,YoutubeVideoPlayer,TextToSpeech,SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiKeysProvider
  ]
})
export class AppModule {}
