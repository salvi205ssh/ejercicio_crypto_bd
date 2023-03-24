import { FormLogComponent } from './form-log/form-log.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormRegistroComponent } from './form-registro/form-registro.component';

const routes: Routes = [
  { path: 'login', component: FormLogComponent },
  { path: 'registro', component: FormRegistroComponent },
  { path: '', component: FormLogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
