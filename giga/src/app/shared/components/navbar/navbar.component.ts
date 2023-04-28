import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavBarOpen: boolean = false;

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
}
