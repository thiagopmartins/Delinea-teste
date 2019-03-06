import { Component, OnInit } from '@angular/core';

import { Candidate } from 'src/app/models/candidate.model';
import { DialogService } from 'src/app/providers/dialog.service';
import { CandidateService } from 'src/app/providers/candidate.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: Candidate[] = [];
  candidateSelected: Candidate;

  constructor(
    private dialogService: DialogService,
    private candidateService: CandidateService
  ) { }

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

  onDelete(): void {
    this.dialogService.confirm(`Deseja deletar o paciente ${this.candidateSelected.name} ?`)
      .then((canDelete: boolean) => {
        if (canDelete) {
          this.candidateService.deleteCandidate(this.candidateSelected.id).subscribe(() => {
            this.listCandidates();
          });
        }
      });
  }
}
