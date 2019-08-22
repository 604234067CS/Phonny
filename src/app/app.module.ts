import { BatteryStatusPage } from './../pages/battery-status/battery-status';
import { FlashPage } from './../pages/flash/flash';
import { LoginPage } from './../pages/login/login';
import { BarcodescanPage } from './../pages/barcodescan/barcodescan';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SMS } from '@ionic-native/sms/ngx';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BarcodescanPage,
    LoginPage,
    FlashPage,
    BatteryStatusPage
    
  ],
  imports: [
    BrowserModule,
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
    BatteryStatusPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Flashlight,SMS,BarcodeScanner,BatteryStatus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
