import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  myForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl("",[Validators.required]),
    phone_no:new FormControl('+91'),
    password:new FormControl(""),
    Address:new FormArray([
      new FormControl('Addr1'),
      new FormControl('Addr2')
    ])
  })

  getAddressFromArray(){
    return this.myForm.get('Address') as FormArray;
  }

  addControlToAddress(){
    this.getAddressFromArray().push(new FormControl("Addr"))
  }
  removeAddressAtIndex(index: number) {
    this.getAddressFromArray().removeAt(index);
  }

  handleSubmit(){
    if(this.myForm.invalid){
      window.alert("Fill the form wih correect values")
    }
    console.log(this.myForm.valid);
    console.log(this.myForm.value);
  }
}
