import { Component, OnInit } from '@angular/core';

import { Candidate } from 'src/app/models/candidate.model';
import { DialogService } from 'src/app/providers/dialog.service';
import { CandidateService } from 'src/app/providers/candidate.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: Candidate[] = [];
  controllers: string[] = [];
  erro: string[] = [];
  candidateSelected: Candidate;
  showModal: boolean;
  form: FormGroup;
  submitLoading: boolean = false;

  constructor(
    private candidateService: CandidateService,
    private dialogService: DialogService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [],
      full_name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      birth_date: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.controllers = Object.keys(this.form.controls);
  }

  ngOnInit() {
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
    this.form.reset();
    if (this.candidateSelected) {
      this.candidateSelected = null;
    }
    this.showModal = true;
  }

  onSave(): void {
    if (this.candidateSelected) {
      this.form.controls['password'].setValue(this.candidateSelected.password);
      this.candidateService.updateCandidate(this.form.value).subscribe((data) => {
        this.listCandidates();
        this.showModal = false;
        console.log(data);
      });
    } else {
      this.candidateService.createCandidate(this.form.value).subscribe((data) => {
        this.listCandidates();
        this.showModal = false;
        console.log(data);
      });
    }
  }

  onEdit(): void {
    this.showModal = true;
    this.form.reset();
    for (const controller of this.controllers) {
      if (controller !== 'password')
        this.form.controls[`${controller}`].setValue(this.candidateSelected[`${controller}`]);
      else
        this.form.controls[`${controller}`].setValue('password');
    }
  }

  onDelete(): void {
    if (localStorage.getItem('token') === (undefined || null)) {
      this.dialogService.confirm(`Apenas usuários logados podem deletar um candidato.\nDeseja acessar a página de login?`)
        .then((login: boolean) => {
          if (login) {
            this.router.navigate(['login']);
          }
        });
    }
    else {
      this.dialogService.confirm(`Deseja deletar o candidato ${this.candidateSelected.full_name} ?`)
        .then((canDelete: boolean) => {
          if (canDelete) {
            this.candidateService.deleteCandidate(this.candidateSelected.id).subscribe(() => {
              this.listCandidates();
            });
          }
        });
    }
  }
}
