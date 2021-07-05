import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from "./Blog/blog.component";
import {FooterComponent} from "./Footer/footer.component";
import {HeaderComponent} from "./Header/header.component";
import {HomeComponent} from "./Home/home.component";
import {PostComponent} from "./Post/post.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes = [
{path:'blog',component: BlogComponent},
{path:'footer',component:FooterComponent},
{path:'header',component: HeaderComponent}, 
{path:'home',component:HomeComponent},
{path:'post',component:PostComponent},
{path:'',redirectTo: 'home',pathMatch: 'full'},
{path:'**',component: PageNotFoundComponent}];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
