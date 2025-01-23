import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private auth_service : AuthService){}

  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    // Prevent body scroll when sidebar is open on mobile
    document.body.style.overflow = this.isSidebarOpen ? 'hidden' : '';
  }

  onMobileItemClick(): void {
    // Close sidebar after clicking a link on mobile
    if (window.innerWidth < 1024) {
      this.toggleSidebar();
    }
  }

  logout(): void {
    // Implement your logout logic here
    this.auth_service.logout();
    this.toggleSidebar(); // Close sidebar after logout on mobile
  }
}
