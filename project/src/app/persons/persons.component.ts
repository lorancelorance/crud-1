import { Component ,OnInit} from '@angular/core';
import { PersonService } from '../services/person.service';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditPersonComponent } from '../edit-person/edit-person.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})


export class PersonsComponent implements OnInit {
  addPerson: any;
  addperson: any;
  bsModalRef: BsModalRef | undefined

  
  constructor(private fb: FormBuilder, private service: PersonService, private router: Router, private modalService: BsModalService) { 
    this.addPerson = this.fb.group(
      {
        Name: ['', Validators.required],
        Email: ['', Validators.required]
      }
    )
  }

  openModalWithEditComponent(person:any) {
    console.log(person);
    const initialState = {
      person:person,
    };
    
    
    this.bsModalRef = this.modalService.show(EditPersonComponent,{initialState});
  }

  ngOnInit(): void {
    this.loadPerson();
  }

  savePerson() {

    console.log(this.addPerson.value);
    this.service.postPerson(this.addPerson.value)
    .subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/persons'])
      window.location.reload();
    })
  }

  
  loadPerson() {
    this.service.getPerson().subscribe((data: any) => {
      // console.log(data);
      this.addperson = data;

    })
  }

  delPerson(datas:any){
    this.service.deletePerson(datas._id).subscribe(data =>{
      console.log(data);
      this.addperson = this.addperson.filter((u:any)=>u!==datas)
    })

  }
}
