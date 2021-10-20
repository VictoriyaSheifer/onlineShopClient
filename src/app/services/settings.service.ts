import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  version: string = "1.0.1";
  baseUrl: string = "https://demoonlineshop.herokuapp.com";
  ImageUrl: string = "https://res.cloudinary.com/drzzptile/image/upload/";
  userId: number = 0
  currentPage: number = 0;
  public slides = [
    { src: `${this.ImageUrl}v1634739775/online_shop/carousel_commercials/commercial_pic1_minery.png` },
    { src: `${this.ImageUrl}v1634739775/online_shop/carousel_commercials/commercial_pic2_kj3lhq.png` },
    { src: `${this.ImageUrl}v1634739775/online_shop/carousel_commercials/commercial_pic3_oaj1qn.png` },
    { src: `${this.ImageUrl}v1634739775/online_shop/carousel_commercials/commercial_pic4_zsdvva.png` }
  ];


}
