import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "../../request-fiber/form/form.component";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '100%',
      width: '100%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
