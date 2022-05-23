import { Component } from '@angular/core';
import {DataService} from '../services/data.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  allOrders = [];
  allOrdersByTime = [];

  constructor(private dataService: DataService, private authService: AuthService) {

    //Get All Order ID
    this.dataService.getAllOrderId().subscribe(res => {
      this.allOrders = res;
    });

    //Get All orders sort by order time
    this.dataService.getOrderByCreatedTime().subscribe(res =>{
      this.allOrdersByTime = res;
    });

  }

    deleteOrder(order){

    console.log('order: ', order);
      this.dataService.deleteOrderAndUserOrders(order);
    }

}
