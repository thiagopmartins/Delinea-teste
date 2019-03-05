import { Component, OnInit } from '@angular/core';

import { Candidate } from 'src/app/models/candidate.model';
import { DialogService } from 'src/app/providers/dialog.service';
import { CandidateService } from 'src/app/providers/candidate.service';

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
    this.candidateService.getAllCandidates().subscribe((data: Candidate) => {
      this.candidates.push(data);
    });
  }

}
