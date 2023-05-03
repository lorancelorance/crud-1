import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

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
