import { Component, OnInit } from '@angular/core';

import { Candidate } from 'src/app/models/candidate.model';
import { DialogService } from 'src/app/providers/dialog.service';
import { CandidateService } from 'src/app/providers/candidate.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: Candidate[] = [];
  candidateSelected: Candidate;
  basic: boolean;
  form: FormGroup;

  constructor(
    private candidateService: CandidateService,
    private dialogService: DialogService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      birth_date: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.listCandidates();
  }

  listCandidates() {
    this.candidates = [];
    this.candidateService.getAllCandidates().subscribe((data: {}) => {
      for (const i in data) {
        this.candidates.push(data[i]);
      }
      console.log(this.candidates);
    });
  }

  onCreate(): void {
    this.basic = true;
  }

  onDelete(): void {
    this.dialogService.confirm(`Deseja deletar o candidato ${this.candidateSelected.name} ?`)
      .then((canDelete: boolean) => {
        if (canDelete) {
          this.candidateService.deleteCandidate(this.candidateSelected.id).subscribe(() => {
            this.listCandidates();
          });
        }
      });
  }
}
