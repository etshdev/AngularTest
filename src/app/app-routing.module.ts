import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './driver/create/create.component';
import { EditComponent } from './driver/edit/edit.component';
import { IndexComponent } from './driver/index/index.component';
import { ViewComponent } from './driver/view/view.component';

const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'driver', redirectTo: 'driver/index', pathMatch: 'full'},
  { path: 'driver/index', component: IndexComponent },
  { path: 'driver/:driverId/view', component: ViewComponent },
  { path: 'driver/create', component: CreateComponent },
  { path: 'driver/:driverId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
