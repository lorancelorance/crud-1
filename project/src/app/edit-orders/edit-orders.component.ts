import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit{
  
  addOrder: any;
  id: any;
  order: any;

  constructor(private fb: FormBuilder, private service: OrderService, private router: Router, private url:ActivatedRoute, public bsModalRef: BsModalRef) {

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

  ngOnInit(): void {
    console.log(this.order);
    this.id = this.order._id;
    this.addOrder.patchValue(this.order)
  }


  updateOrder() {
    console.log(this.addOrder.value);
    this.service.updateOrder(this.id,this.addOrder.value)
    .subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/order']);
      window.location.reload();
      
    }
    )
  }
}
