import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './home/images/images.component';
import { ImgTextComponent } from './home/img-text/img-text.component';
import { IconsComponent } from './home/icons/icons.component';
import { ContactComponent } from './home/contact/contact.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FooterComponent } from './home/footer/footer.component';
import { BigTextCatamaranComponent } from './home/big-text-catamaran/big-text-catamaran.component';
import { IframeComponent } from './home/iframe/iframe.component';
import { BottomWhatsappComponent } from './home/bottom-whatsapp/bottom-whatsapp.component';
import { BigTextComponent } from './home/big-text/big-text.component';
import { MapaDestinoComponent } from './home/mapa-destino/mapa-destino.component';
import { OpcionesConImgComponent } from './home/opciones-con-img/opciones-con-img.component';
import { FullVideoComponent } from './home/full-video/full-video.component';

@NgModule({
  declarations: [
    AppComponent,
   
    
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
    FooterComponent,
    IframeComponent,
    BottomWhatsappComponent,
    MapaDestinoComponent,
    OpcionesConImgComponent,
    FullVideoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
