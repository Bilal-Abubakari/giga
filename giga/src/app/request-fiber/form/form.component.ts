import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor() {
    this.requestFiberForm.valueChanges.subscribe(values => console.log(this.requestFiberForm))
  }

  idTypes: string[] = ['Passport', 'National ID']
  regions: string[] = ['Ashanti', 'Brong Ahafo', 'Central', 'Eastern', 'Accra', 'Northern', 'Western', 'Upper East', 'Upper West', 'Volta']
  yesNo: string[] = ['Yes', 'No'];
  dataPackages: string[] = ['Vodafone One Family EXTRA LARGE', 'Vodafone One Family LARGE', 'Vodafone One Family MEDIUM', 'Vodafone One Family SMALL', 'Office', 'Downloader', 'Webmaster', 'Streamer', 'Browser']
  voicePackage: string[] = ['Landline Lite', 'Landline Basic', 'Landline Extra']
  source: string[] = ['SMS', 'Retail Shop', 'Sales Person', 'Vodafone Staff', 'Existing Broadband User', 'Other']

  requestFiberForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]{2,}$')]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]{2,}$')]),
    otherName: new FormControl('', [Validators.minLength(2), Validators.pattern('^[a-zA-Z]{2,}$')]),
    dateOfBirth: new FormControl('', [Validators.required,]),
    idType: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{7,13}$/)]),
    postalAddress: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required],),
    installationRegion: new FormControl('', [Validators.required],),
    fixedLine: new FormControl('', [Validators.required],),
    dataPackage: new FormControl('', [Validators.required],),
    voicePackage: new FormControl(''),
    firstNameCP: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]{2,}$')]),
    lastNameCP: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]{2,}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    altPhoneNumber: new FormControl('', [Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    userName: new FormControl('', [Validators.required]),
    source: new FormControl(''),
  })

  onSubmit() {
    if(this.requestFiberForm.valid){

    }
    else{
      this.requestFiberForm.markAllAsTouched()
      this.markAllAsDirty()
    }
  }

  markAllAsDirty() {
    Object.keys(this.requestFiberForm.controls).forEach(key => {
      // @ts-ignore
      this.requestFiberForm.get(key).markAsDirty();
    });
  }

}
