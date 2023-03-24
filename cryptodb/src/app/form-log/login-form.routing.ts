import { TablaComponent } from './../tabla/tabla.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'tabla', component: TablaComponent }];
export const LoginFormRoutes = RouterModule.forChild(routes);
