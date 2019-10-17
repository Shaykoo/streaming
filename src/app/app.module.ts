import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { PasswordAssignmentComponent } from './password-assignment/password-assignment.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubService } from './services/github/github.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactFormComponent,
    FormAssignmentComponent,
    SignupFormComponent,
    CustomValidatorsComponent,
    FormArrayComponent,
    PasswordAssignmentComponent,
    PostsComponentComponent,
    GithubFollowersComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'followers/:username', component: GithubProfileComponent},
      { path:'followers', component: GithubFollowersComponent},
      { path:'posts', component: PostsComponentComponent},
      { path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [
    PostService,
  { provide: ErrorHandler, useClass: AppErrorHandler},
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
