import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent {
  addPerson: any;
  id: any;
  person: any;

 
  constructor(private fb: FormBuilder, private service: PersonService, private router: Router,  public bsModalRef: BsModalRef) { 
    this.addPerson = this.fb.group(
      {
        Name: ['', Validators.required],
        Email: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
    console.log(this.person);
    this.id = this.person._id;
    this.addPerson.patchValue(this.person)
  }


  updatePerson() {
    console.log(this.addPerson.value);
    this.service.updatePerson(this.id,this.addPerson.value)
    .subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/person']);
      window.location.reload();
      
    }
    )
  } 
}