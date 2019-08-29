import { Component, ViewChild, OnInit } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  contentClass = 'red';

  @ViewChild(IonMenu, { static: false }) menu;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((route: NavigationStart) => {
        if (route.url === '/tabs/tab2') {
          this.doIt();
        }
      });
  }

  private doIt() {
    console.log('Ima gonna do it, whatever "it" is...');
  }

  setBackground(color: string) {
    this.contentClass = color;
    this.menu.close();
  }

  openProfile() {
    this.menu.close();
    this.router.navigate(['profile']);
  }

  ionViewWillEnter() {
    console.log('tab2 will enter');
  }

  ionViewDidEnter() {
    console.log('tab2 did enter');
  }
}
