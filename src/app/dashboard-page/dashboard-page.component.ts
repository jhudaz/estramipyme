import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { RouterLink } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    AdminNavbarComponent,
    RouterLink,
    DataViewComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent  {}
