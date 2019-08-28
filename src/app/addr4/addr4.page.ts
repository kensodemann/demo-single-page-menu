import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addr4',
  templateUrl: './addr4.page.html',
  styleUrls: ['./addr4.page.scss']
})
export class Addr4Page implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {}
}
