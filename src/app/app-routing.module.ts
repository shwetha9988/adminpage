import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostComponent } from './admin/dashboard/post/post.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { PagesComponent } from './admin/pages/pages.component';
import { SettingsComponent } from './admin/settings/settings.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
     children:[
  { path:'dashboard',component:DashboardComponent },
  {path:'post',component:PostComponent},
  {path:'comment',component:CommentsComponent},
  {path:'pages',component:PagesComponent},
  {path:'setter',component:SettingsComponent}

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
