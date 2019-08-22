import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private batteryStatus: BatteryStatus) {

  }

  checkstatus(){
    const subscription = this.batteryStatus.onChange().subscribe(status => {
      console.log(status.level, status.isPlugged);
   });
   
   // stop watch
   subscription.unsubscribe();
   console.log('OK');
  }

}
