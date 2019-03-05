import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: String;
  options: any[] = [];

  constructor(
    private activiteRouter: ActivatedRoute,
    private router: Router,
    private titlePage: Title
  ) { 
    this.title = "Teste";
    titlePage.setTitle("Bem vindo ao Banco de Talentos...");
  }

  ngOnInit() {
    this.options = [
      {
        title: 'Candidatos',
        icon: 'user',
        link: './candidatos'
      }
    ];
  }

}
