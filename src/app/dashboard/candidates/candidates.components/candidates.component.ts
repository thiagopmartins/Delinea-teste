import { Component, OnInit } from '@angular/core';

import { Candidate } from 'src/app/models/candidate.model';
import { DialogService } from 'src/app/providers/dialog.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: Candidate[] = [];
  candidateSelected: Candidate;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.candidates.push({
      birthdate: Date.toString(),
      cpf: '12345678977',
      rg: '12345695',
      id: 1,
      name: 'Thiago Martins',
      password: '123456',
      phone: '4999896325',
      username: 'thiagopmartins',
      email: 'thiagopmartins@outlook.com'
    },
      {
        birthdate: Date.toString(),
        cpf: '12345678977',
        rg: '12345695',
        id: 1,
        name: 'Thiago Martins 2',
        password: '123456',
        phone: '4999896325',
        username: 'thiagopmartins',
        email: 'thiagopmartins@outlook.com'
      }
    );
  }

}
