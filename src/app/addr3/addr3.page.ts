import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addr3',
  templateUrl: './addr3.page.html',
  styleUrls: ['./addr3.page.scss']
})
export class Addr3Page implements OnInit {
  constructor(public navController: NavController, public router: Router) {}

  ngOnInit() {}
}
