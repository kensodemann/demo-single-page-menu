import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  contentClass = 'red';

  @ViewChild(IonMenu, { static: false }) menu;

  constructor(private router: Router) {}

  setBackground(color: string) {
    this.contentClass = color;
    this.menu.close();
  }

  openProfile(){
    this.menu.close();
    this.router.navigate(['profile']);
  }
}
