import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/authentication.module';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { PollCreateComponent } from './poll/poll-create/poll-create.component';
import { PollModule } from './poll/poll.module';
import { PollListComponent } from './poll/poll-list/poll-list.component';
import { PollSearchComponent } from './poll/poll-search/poll-search.component';
import { PollVotingComponent } from './poll/poll-voting/poll-voting.component';
import { PollEditComponent } from './poll/poll-edit/poll-edit.component';



const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/signup',
    component: SignUpComponent
  },
  {
    path: 'polls/search',
    component: PollSearchComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'polls/list',
    component: PollListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'polls/create',
    component: PollCreateComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'polls/edit/:id',
    component: PollEditComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'polls/view/:id',
    component: PollVotingComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'polls/search'
  }
];

@NgModule({
  imports: [
    // Authentication
    AuthModule,

    // Polling app
    PollModule,

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
