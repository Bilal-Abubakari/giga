import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "../../../request-fiber/form/form.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
  isNavBarOpen: boolean = false;

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
}
