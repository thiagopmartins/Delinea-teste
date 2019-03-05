import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: String;
  options: any[] = [];

  constructor(
    private router: Router,
    private activiteRouter: ActivatedRoute
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.activiteRouter.firstChild.data['value'].title
      }
    });
  }

  ngOnInit() {
    this.options = [
      {
        title: 'Empresas',
        icon: 'store',
        link: './empresa'
      },
      {
        title: 'Integrador',
        icon: 'deploy',
        link: './integrador'
      }
    ];
  }

}
