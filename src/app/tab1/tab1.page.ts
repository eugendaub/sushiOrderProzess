import { Component } from '@angular/core';
import suggestedSushi from '../../assets/mockdata/suggestedSushi.json';
import nigiriSushi from '../../assets/mockdata/nigiriSushi.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import {AuthService} from '../services/auth.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  msg = '';
  dasherizeImg ='';
  sushiImageLink = '';

  data =[
    {
      title: 'Suggested Sushi',
      albums: suggestedSushi
    },
    {
      title: 'Nigiri Sushi',
      albums: nigiriSushi
    },
    {
      title: 'Ura Maki',
      albums: jumpBackIn
    }
  ];
  // mehrere Bilder pro Seite darstellen
  optsHorizontalScroll= {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };

  constructor( private authService: AuthService, private dataService: DataService) {}

  // Helper function for image names
  // eslint-disable-next-line id-blacklist
  dasherize(string) {
    // eslint-disable-next-line id-blacklist,prefer-arrow/prefer-arrow-functions
    return this.dasherizeImg = string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
  placeAnOrder(order){
    const logInUserEmail = this.authService.getUserEmail();
    const logInUserId= this.authService.getUserId();
    const titleEscaped = encodeURIComponent(order.title);
    console.log('titleEscape ', titleEscaped);
    console.log('image: ', this.dasherizeImg);
    const img= this.dasherize(order.image);
    console.log('funktion IMF:', img);
    this.sushiImageLink = order.image;

    console.log('image Link: ', this.sushiImageLink);
    this.dataService.addOrderToUser(logInUserId, logInUserEmail,  order.title,  order.title , img);
  }

  logout(){
    this.authService.logout();
  }
  deleteUser(){
    const userId = this.authService.getUserId();
    this.authService.deleteUser();
    this.dataService.deleteUserDocument(userId);
  }

}
