import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('profile will enter');
  }

  ionViewDidEnter() {
    console.log('profile did enter');
  }
}
