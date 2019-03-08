import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CandidatesComponent } from './candidates.components/candidates.component';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CandidatesComponent
  ],
  imports: [
    CandidatesRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CandidatesModule { }
