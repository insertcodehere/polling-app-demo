import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';

import { PollListComponent } from './poll-list/poll-list.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PollSearchComponent } from './poll-search/poll-search.component';
import { PollVotingComponent } from './poll-voting/poll-voting.component';
import { InputListModule } from '../shared/input-list/input-list.module';
import { PollEditComponent } from './poll-edit/poll-edit.component';
import { EmptyListModule } from '../shared/empty-list/empty-list.module';



@NgModule({
  declarations: [
    PollListComponent,
    PollSearchComponent,
    PollCreateComponent,
    PollEditComponent,
    PollVotingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MaterialModule,

    InputListModule,
    EmptyListModule
  ]
})
export class PollModule { }
