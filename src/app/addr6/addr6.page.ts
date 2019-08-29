import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addr6',
  templateUrl: './addr6.page.html',
  styleUrls: ['./addr6.page.scss']
})
export class Addr6Page implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('addr6 will enter');
  }

  ionViewDidEnter() {
    console.log('addr6 did enter');
  }
}
