import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { BuddyService } from './services/buddy.service';
import { TripService } from './services/trip.service';
import { BuddyIndexComponent } from './components/buddy/buddy-index/buddy-index.component';
import { BuddyCreateComponent } from './components/buddy/buddy-create/buddy-create.component';
import { BuddyDetailComponent } from './components/buddy/buddy-detail/buddy-detail.component';
import { BuddyEditComponent } from './components/buddy/buddy-edit/buddy-edit.component';
import { BuddyDeleteComponent } from './components/buddy/buddy-delete/buddy-delete.component';
import { BuddyCurrentUserComponent } from './components/buddy/buddy-current-user/buddy-current-user.component';
import { TripIndexComponent } from './components/trip/trip-index/trip-index.component';
import { TripCreateComponent } from './components/trip/trip-create/trip-create.component';
import { TripDetailComponent } from './components/trip/trip-detail/trip-detail.component';
import { TripsForCurrentUserIndexComponent } from './components/trip/trips-for-current-user-index/trips-for-current-user-index.component';
import { TripEditComponent } from './components/trip/trip-edit/trip-edit.component';
import { TripDeleteComponent } from './components/trip/trip-delete/trip-delete.component';
import { TripAddAdditionalBuddyComponent } from './components/trip/trip-add-additional-buddy/trip-add-additional-buddy.component';
import { TripRemoveAdditionalBuddyComponent } from './components/trip/trip-remove-additional-buddy/trip-remove-additional-buddy.component';
import { TripAdditionalBuddiesForTripComponent } from './components/trip/trip-additional-buddies-for-trip/trip-additional-buddies-for-trip.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'buddies', canActivate: [AuthGuard], children: [
      { path: '', canActivate: [AdminGuard], component: BuddyIndexComponent },
      { path: 'create', component: BuddyCreateComponent },
      { path: 'detail/:id', component: BuddyDetailComponent },
      { path: 'edit/:id', component: BuddyEditComponent },
      { path: 'delete/:id', component: BuddyDeleteComponent },
      { path: 'current-user', component: BuddyCurrentUserComponent},
    ]
  },
  {
    path: 'trip', canActivate: [AuthGuard], children: [
      { path: '', component: TripIndexComponent },
      { path: 'create', component: TripCreateComponent },
      { path: 'detail/:id', component: TripDetailComponent },
      { path: 'TripsForCurrentUser', component: TripsForCurrentUserIndexComponent},
      { path: 'edit/:id', component: TripEditComponent },
      { path: 'delete/:id', component: TripDeleteComponent},
      { path: 'addAdditionalBuddy', component: TripAddAdditionalBuddyComponent},
      { path: 'removeAdditionalBuddy/:additionalBuddyId', component: TripRemoveAdditionalBuddyComponent}

    ]
  },

  { path: '**', component: RegistrationComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    BuddyIndexComponent,
    BuddyCreateComponent,
    BuddyDetailComponent,
    BuddyEditComponent,
    BuddyDeleteComponent,
    BuddyCurrentUserComponent,
    TripIndexComponent,
    TripCreateComponent,
    TripDetailComponent,
    TripsForCurrentUserIndexComponent,
    TripEditComponent,
    TripDeleteComponent,
    TripAddAdditionalBuddyComponent,
    TripRemoveAdditionalBuddyComponent,
    TripAdditionalBuddiesForTripComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    BuddyService,
    TripService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
