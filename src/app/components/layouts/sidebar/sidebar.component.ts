import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  opened = true;
  menuItems = [
    { link: '/', icon: 'home', text: 'Home' },
    { link: '/about', icon: 'info', text: 'About' },
  ];

  constructor(private sidebarService: SidebarService, private router: Router) {}

  ngOnInit() {
    this.sidebarService.toggleSidebar$.subscribe(() => {
      this.toggleSidebar();
    });
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }
}
