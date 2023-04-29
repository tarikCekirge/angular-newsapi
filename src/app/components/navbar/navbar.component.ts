import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isHidden = true;

  toggleMenu() {
    this.isHidden = !this.isHidden;
  }
  resetToggle() {
    this.isHidden = true
  }
}
