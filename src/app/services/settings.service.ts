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
    { src: "https://res.cloudinary.com/drzzptile/image/upload/v1634739775/online_shop/carousel_commercials/commercial_pic1.png" },
    { src: "https://res.cloudinary.com/drzzptile/image/upload/v1634739775/online_shop/carousel_commercials/commercial_pic2.png" },
    { src: "https://res.cloudinary.com/drzzptile/image/upload/v1634739775/online_shop/carousel_commercials/commercial_pic3.png" },
    { src: "https://res.cloudinary.com/drzzptile/image/upload/v1634739775/online_shop/carousel_commercials/commercial_pic4.png" }
  ];


}
