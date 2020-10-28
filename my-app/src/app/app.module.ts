import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { UserResolver } from './components/user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MeetingFormComponent } from './components/meetingForm/meetingForm.component';
import { NavbarComponent } from './components/navbar/navbar.component';
/* Material Design */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    RegisterComponent,
    JumbotronComponent,
    MeetingFormComponent,
    // MatDatepickerModule,
    // MatNativeDateModule 

  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDatepickerModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    FontAwesomeModule, 
    BrowserAnimationsModule // imports firebase/auth, only needed for auth features
  ],
  exports : [
    // MatDatepickerModule,
    // MatNativeDateModule
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, ],
  bootstrap: [AppComponent]
})
export class AppModule { };