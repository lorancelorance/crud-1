import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductComponent implements OnInit {
  addProduct: any;
  addproduct: any;
  bsModalRef: BsModalRef | undefined;

  constructor(private fb: FormBuilder, private service:ProductService, private router: Router, private modalService: BsModalService) { 
    this.addProduct = this.fb.group(
      {
        Name: ['', Validators.required],
        Description: ['', Validators.required],
        Categories: ['', Validators.required],

      }
    )
  }

  openModalWithEditComponent(product:any) {
    console.log(product);
    const initialState = {
      product:product,
    };
     
    this.bsModalRef = this.modalService.show(EditProductComponent,{initialState});
  }

  ngOnInit(): void {
    this.loadProduct()
  }

  saveProduct() {

    console.log(this.addProduct.value);
    this.service.postProduct(this.addProduct.value)
    .subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/product-item'])
      window.location.reload();
    })
  }

  loadProduct() {
    this.service.getProduct().subscribe((data: any) => {
      // console.log(data);
      this.addproduct = data;

    })
  }

  delProduct(datas:any){
    this.service.deleteProduct(datas._id).subscribe(data =>{
      console.log(data);
      this.addproduct = this.addproduct.filter((u:any)=>u!==datas)
    })

  }
}

