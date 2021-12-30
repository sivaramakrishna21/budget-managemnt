import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddIncomeComponent} from './add-income/add-income.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BottomBarComponent} from './bottom-bar/bottom-bar.component'

const routes: Routes = [
  {
    path:'expenses',
    component:BottomBarComponent
  },
  {
    path:'home',
    component:MainPageComponent
  },
  {
    path:"",
    redirectTo:'/home',
    pathMatch:"full"
  },
  {
    path:':token',
    component:AddIncomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
