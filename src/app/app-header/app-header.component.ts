import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  isAdmin = false;
  title: string = 'B O N J O U R !';

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
