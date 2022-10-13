import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { OrdersComponent } from './orders/orders.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SuccessComponent } from './success/success.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:'full'},
{ path: 'login',component:LoginComponent},
{ path: 'home',component:HomeComponent},
{ path: 'movie',component:MovieComponent,canActivate: [AuthGuard]},
{ path: 'details',component:DetailsComponent,canActivate: [AuthGuard]},
{ path: 'purchase',component:PurchaseComponent,canActivate: [AuthGuard]},
{path:'success',component:SuccessComponent,canActivate: [AuthGuard]},
{path:'orders',component:OrdersComponent},

{path: '**',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
