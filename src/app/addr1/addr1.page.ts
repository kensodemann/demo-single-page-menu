import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addr1',
  templateUrl: './addr1.page.html',
  styleUrls: ['./addr1.page.scss']
})
export class Addr1Page implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
}
