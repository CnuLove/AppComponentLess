import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { SampleComponent } from './sample/sample.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.service';
import { PermissionsService } from './permissions.service';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path:"",
    canActivate:[  () => inject(AuthService).isAuthservice$],
    children:[
      {
        path:"",
        resolve:{
          user: () => inject(AuthService).userData$
        },
        children:[
          {
            path: "basic", component: BasicComponent,
          },
          {
            path: "sample", component: SampleComponent,
          },
        ]
      },
      {
        path: "admin", component: AdminComponent,
        canActivate: [
          () => inject(PermissionsService).adminPermission$
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
