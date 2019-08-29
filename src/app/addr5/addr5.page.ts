import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addr5',
  templateUrl: './addr5.page.html',
  styleUrls: ['./addr5.page.scss']
})
export class Addr5Page implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('addr5 will enter');
  }

  ionViewDidEnter() {
    console.log('addr5 did enter');
  }
}
