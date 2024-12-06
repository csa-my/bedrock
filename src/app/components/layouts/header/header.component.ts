import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarService } from '@services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() opened = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private sidebarService: SidebarService) {}

  onToggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
