import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default-layout/default.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { AddressComponent } from './pages/account/address/address.component';
import { AdminComponent } from './layout/admin-layout/admin.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{
		path: 'home',
		component: DefaultComponent,
		children: [{ path: '', title: 'Gacha Shop', component: HomeComponent }],
	},
	{
		path: 'login',
		component: DefaultComponent,
		children: [{ path: '', title: 'Đăng nhập', component: LoginComponent }],
	},
	{
		path: 'register',
		component: DefaultComponent,
		children: [{ path: '', title: 'Đăng ký', component: RegisterComponent }],
	},
	{
		path: 'account',
		component: DefaultComponent,
		children: [
			{ path: '', title: 'Tài khoản', component: AccountComponent },
			{ path: 'address', title: 'Sổ địa chỉ', component: AddressComponent },
		],
	},
	// Admin
	{
		path: 'admin',
		component: AdminComponent,
		children: [{ path: '', title: 'Admin', component: AdminPageComponent }],
	},
	{ path: '**', title: '404 - Không tìm thấy nội dung', component: PagenotfoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
