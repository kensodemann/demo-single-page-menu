import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addr2',
  templateUrl: './addr2.page.html',
  styleUrls: ['./addr2.page.scss']
})
export class Addr2Page implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {}
}
