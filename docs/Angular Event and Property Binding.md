# Angular Event and Property Binding

To control the toggleSidebar method in SidebarComponent from HeaderComponent, you can use Angular's event and property binding to communicate between the components. Here's a step-by-step plan:

- Create a Service: This service will act as a bridge between the HeaderComponent and SidebarComponent.
- Inject the Service: Inject the service into both components.
- Emit an Event from HeaderComponent: Emit an event from HeaderComponent to toggle the sidebar.
- Listen for the Event in SidebarComponent: Listen for the event in SidebarComponent and call the toggleSidebar method.

## Step 1: Create a Service

Create a new service named SidebarService.

`ng generate service services/sidebar`

This will create a new service file. Let's add the necessary code to it.

```typescript
// src/app/services/sidebar.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private toggleSidebarSource = new Subject<void>();
  toggleSidebar$ = this.toggleSidebarSource.asObservable();

  toggleSidebar() {
    this.toggleSidebarSource.next();
  }
}
```

## Step 2: Inject the Service

Inject the SidebarService into both HeaderComponent and SidebarComponent.

```typescript
// src/app/components/layouts/header/header.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

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
```

```typescript
// src/app/components/layouts/sidebar/sidebar.component.ts

import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  opened = true;
  menuItems = [
    { link: '/home', icon: 'home', text: 'Home' },
    { link: '/about', icon: 'info', text: 'About' },
  ];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.toggleSidebar$.subscribe(() => {
      this.toggleSidebar();
    });
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
```

## Step 3: Emit an Event from HeaderComponent

This step is already covered in the HeaderComponent code above. The onToggleSidebar method emits the event using the SidebarService.

## Step 4: Listen for the Event in SidebarComponent

This step is covered in the SidebarComponent code above. The ngOnInit lifecycle hook subscribes to the toggleSidebar$ observable and calls the toggleSidebar method when the event is emitted.

With these changes, clicking the button in the HeaderComponent will toggle the sidebar in the SidebarComponent.