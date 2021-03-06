import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isIOS: boolean;

  constructor(platform: Platform) {
    this.isIOS = platform.is('ios');
  }
}
