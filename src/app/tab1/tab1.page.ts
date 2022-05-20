import { Component } from '@angular/core';
import suggestedSushi from '../../assets/mockdata/suggestedSushi.json';
import nigiriSushi from '../../assets/mockdata/nigiriSushi.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import {Router} from '@angular/router';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  msg = '';

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

  constructor(private chatService: ChatService) {}

  // Helper function for image names
  // eslint-disable-next-line id-blacklist
  dasherize(string) {
    // eslint-disable-next-line id-blacklist,prefer-arrow/prefer-arrow-functions
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
  placeAnOrder(order){
    const titleEscaped = encodeURIComponent(order.title);
    console.log('titleEscape ', titleEscaped);
  }
/*
  sendOrder(){
    this.chatService.addMessage(this.chatId, this.msg).then(_=>{
      this.msg = '';
      this.content.scrollToBottom(300);
    });
  }*/

}
