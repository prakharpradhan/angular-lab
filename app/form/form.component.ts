import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  category = ['electronic', 'non-electronic', 'Grocery', 'Mobile', 'clothes'];
  submit() {
    console.log(this.form);
  }
  form = new Form(101, 'abc', 500, true, '', 'bigbazar');
}
