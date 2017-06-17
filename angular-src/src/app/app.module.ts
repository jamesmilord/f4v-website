import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { WaterwheelComponent } from './components/waterwheel-carousel/waterwheel.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CountdownComponent,
    WaterwheelComponent,
    FooterComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
