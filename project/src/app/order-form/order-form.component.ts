import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  addOrder: any;
  constructor(private fb: FormBuilder, private service: OrderService, private router: Router,public bsModalRef: BsModalRef) {
    

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

  ngOnInit() {
     
  }

  
  saveOrder() {
    console.log(this.addOrder.value);
    this.service.postOrder(this.addOrder.value)
    .subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/order']);
      window.location.reload();
      
    })
  }
}
