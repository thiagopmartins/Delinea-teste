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
  userName: string;

  constructor(
    private activiteRouter: ActivatedRoute,
    private router: Router,
    private titlePage: Title
  ) { 
    this.title = "Teste";
    titlePage.setTitle("Bem vindo ao Banco de Talentos...");

    console.log(localStorage.getItem('user'));
    

    this.userName = localStorage.getItem('user') === ( undefined || null ) ? 'Não logado' : localStorage.getItem('user');
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

  logout() {
    localStorage.clear();
  }

}
