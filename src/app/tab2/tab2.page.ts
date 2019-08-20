import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  contentClass = 'red';

  @ViewChild(IonMenu, { static: false }) menu;

  constructor() {}

  setBackground(color: string) {
    this.contentClass = color;
    this.menu.close();
  }
}
