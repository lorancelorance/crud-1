import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3000/api/product';

  constructor(private http: HttpClient) { }

  postProduct(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  getProduct(){
    return this.http.get(`${this.baseUrl}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: any,product: any) {
    return this.http.put(`${this.baseUrl}/${id}`,product);
    
  }
}
