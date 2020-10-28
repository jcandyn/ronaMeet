import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'meeting-form-component',
  templateUrl: './meetingForm.component.html',
  styleUrls: ['./meetingForm.component.scss']
})

export class MeetingFormComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    link: new FormControl(''),
    date: new FormControl(''),
  });

  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  doSomething() {
    alert('hi')
  }
  
}