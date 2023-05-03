import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  addProduct: any;
  product: any;
  id: any;

  constructor(private fb: FormBuilder, private service:ProductService, private router: Router, public bsModalRef: BsModalRef) { 
    this.addProduct = this.fb.group(
      {
        Name: ['', Validators.required],
        Description: ['', Validators.required],
        Categories: ['', Validators.required],

      }
    )
  }

  ngOnInit(): void {
    console.log(this.product);
    this.id = this.product._id;
    this.addProduct.patchValue(this.product)
    
  }

  updateProduct() {

    console.log(this.addProduct.value);
    this.service.updateProduct(this.id,this.addProduct.value)
    .subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/product-item'])
      window.location.reload();
    })
  }
}
