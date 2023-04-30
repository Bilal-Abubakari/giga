import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // ngOnInit(): void {
  //   const requestFiberForm = new FormGroup({
  //     firstName: new FormControl()
  //   })
  // }
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogDat,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  idTypes: string[] = ['Select an ID', 'Passport', 'National ID']
  regions: string[] = ['Ashanti', 'Brong Ahafo', 'Central', 'Eastern', 'Accra', 'Northern', 'Western', 'Upper East', 'Upper West', 'Volta']
  yesNo: string[] = ['Yes', 'No'];
  dataPackages: string[] = ['Vodafone One Family EXTRA LARGE', 'Vodafone One Family LARGE', 'Vodafone One Family MEDIUM', 'Vodafone One Family SMALL', 'Office', 'Downloader', 'Webmaster', 'Streamer', 'Browser']
  voicePackage: string[] = ['Landline Lite', 'Landline Basic', 'Landline Extra']
  source: string[] = ['SMS', 'Retail Shop', 'Sales Person', 'Vodafone Staff', 'Existing Broadband User', 'Other']

}
