import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    // canActivate: [AuthGuard ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled'
    },
   )], exports: [RouterModule]
})
export class AppRoutingModule { }
