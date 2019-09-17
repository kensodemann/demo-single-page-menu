import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  buttonPrompt = 'Disable';
  private backButtonSubscription: Subscription;

  constructor(private platform: Platform) {}

  ionViewWillEnter() {
    console.log('tab1 will enter');
  }

  ionViewDidEnter() {
    console.log('tab1 did enter');
  }

  toggle() {
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
      this.backButtonSubscription = null;
      this.buttonPrompt = 'Disable';
    } else {
      this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {});
      this.buttonPrompt = 'Enable';
    }
  }
}
