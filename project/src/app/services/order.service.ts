import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
private baseUrl = 'http://localhost:3000/api/order';

  constructor(private http: HttpClient) { }

  postOrder(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  getOrder(){
    return this.http.get(`${this.baseUrl}`);
  }

  deleteOrder(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateOrder(id: any,order: any) {
    return this.http.put(`${this.baseUrl}/${id}`,order);
    
  }
  
 
}
