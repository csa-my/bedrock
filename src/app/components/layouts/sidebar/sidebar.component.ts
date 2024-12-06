import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  opened = true;
  menuItems = [
    { link: '/home', icon: 'home', text: 'Home' },
    { link: '/about', icon: 'info', text: 'About' },
  ];

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
