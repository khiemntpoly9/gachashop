import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default-layout/default.component';
import { AdminComponent } from './layout/admin-layout/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './layout/default-layout/components/header/header.component';
import { FooterComponent } from './layout/default-layout/components/footer/footer.component';
import { CarouselModule } from '@coreui/angular';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { AddressComponent } from './pages/account/address/address.component';
import { NavbarComponent } from './layout/admin-layout/components/navbar/navbar.component';
import { SiderbarComponent } from './layout/admin-layout/components/siderbar/siderbar.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';

@NgModule({
	declarations: [
		AppComponent,
		DefaultComponent,
		AdminComponent,
		HomeComponent,
		PagenotfoundComponent,
		HeaderComponent,
		FooterComponent,
		SlideshowComponent,
		LoginComponent,
		RegisterComponent,
		AccountComponent,
		AddressComponent,
		NavbarComponent,
		SiderbarComponent,
		AdminPageComponent,
	],
	imports: [BrowserModule, AppRoutingModule, CarouselModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
