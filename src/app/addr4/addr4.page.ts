import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-addr4',
  templateUrl: './addr4.page.html',
  styleUrls: ['./addr4.page.scss']
})
export class Addr4Page implements OnInit {
  canPop: string;

  constructor(public navController: NavController, public router: Router, private routerOutlet: IonRouterOutlet) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('addr4 will enter');
  }

  ionViewDidEnter() {
    console.log('addr4 did enter');
    this.canPop = this.routerOutlet.canGoBack() ? 'Yes' : 'No';
  }
}
