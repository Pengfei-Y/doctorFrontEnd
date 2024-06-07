import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent, 
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
