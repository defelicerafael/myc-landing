import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigTextComponent } from './home/big-text/big-text.component';
import { ImagesComponent } from './home/images/images.component';
import { ImgTextComponent } from './home/img-text/img-text.component';
import { IconsComponent } from './home/icons/icons.component';
import { ContactComponent } from './home/contact/contact.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BigTextComponent,
    ImagesComponent,
    ImgTextComponent,
    IconsComponent,
    CarouselComponent,
    ContactComponent,
    FooterComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
