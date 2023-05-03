import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = 'http://localhost:3000/api/person';

  constructor(private http: HttpClient) { }


  postPerson(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  getPerson(){
    return this.http.get(`${this.baseUrl}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deletePerson(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updatePerson(id: any,person: any) {
    return this.http.put(`${this.baseUrl}/${id}`,person);
    
  }
  
}
