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
	],
	imports: [BrowserModule, AppRoutingModule, CarouselModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
