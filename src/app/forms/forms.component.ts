import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  fb=inject(FormBuilder);
  // myForm = new FormGroup({
    // name: new FormControl('', [Validators.required, Validators.email]),
    // email: new FormControl("", [Validators.required]),
    // phone_no: new FormControl('+91'),
    // password: new FormControl(""),
    // passwordVisibility: new FormControl(''),
    // Address: new FormArray([
      // new FormControl("Addr")
    // ])
  // });

  myForm=this.fb.group({
    name:this.fb.control('',[Validators.required]),
    email:['',[Validators.required]],//another way of passing control
    phone_no:['+91'],
    password:['',[Validators.required, Validators.minLength(7),Validators.pattern('[a-z]+')]],
    passwordVisibility:['', [Validators.required]],
    Address:this.fb.array([
      ['ADDR']
    ]),
  })

  getAddressFromArray() {
    return this.myForm.get('Address') as FormArray;
  }

  addControlToAddress() {
    this.getAddressFromArray().push(new FormControl("Addr"));
  }

  removeAddressAtIndex(index: number) {
    this.getAddressFromArray().removeAt(index);
  }

  handleSubmit() {
    if (this.myForm.invalid) {
      window.alert("Fill the form with correct values");
    }
    console.log(this.myForm.valid);
    console.log(this.myForm.value);
  }
}
