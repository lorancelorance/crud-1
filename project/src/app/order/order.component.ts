import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from "@angular/router";

import { EditOrdersComponent } from '../edit-orders/edit-orders.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})


export class OrderComponent implements OnInit {

  addOrder: any;
  addorder: any;
  bsModalRef: BsModalRef | undefined

  constructor(private fb: FormBuilder, private service: OrderService, private router: Router,
    private modalService: BsModalService
    ) {
    

    this.addOrder = this.fb.group(
      {
        No: ['', Validators.required],
        Name: ['', Validators.required],
        Quntity: ['', Validators.required],
        Price: ['', Validators.required],
        Total: ['', Validators.required],
        Date: ['', Validators.required],
      }
    )
  }

  openModalWithComponent() {

    this.bsModalRef = this.modalService.show(OrderFormComponent);
  }
  
  openModalWithEditComponent(order:any) {
    console.log(order);
    const initialState = {
      order:order,
    };
    
    
    this.bsModalRef = this.modalService.show(EditOrdersComponent,{initialState});
  }


  ngOnInit(): void {
    this.loadOrder();
  }

  
  loadOrder() {
    this.service.getOrder().subscribe((data: any) => {
      // console.log(data);
      this.addorder = data;

    })
  }

  delOrder(datas:any){
    this.service.deleteOrder(datas._id).subscribe(data =>{
      console.log(data);
      this.addorder = this.addorder.filter((u:any)=>u!==datas)
    })

  }
  
}





