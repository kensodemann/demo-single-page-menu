import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addr1',
  templateUrl: './addr1.page.html',
  styleUrls: ['./addr1.page.scss']
})
export class Addr1Page implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {}
}
