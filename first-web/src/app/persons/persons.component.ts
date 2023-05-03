import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {
  formValue !: FormGroup;
  constructor(private formbuilber: FormBuilder) {}

  ngOnInit(): void{
    this.formValue = this.formbuilber.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      salary : ['']
})
  }
}
