import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { RouterLink } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';
import { FooterComponent } from './footer/footer.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    AdminNavbarComponent,
    UserInfoComponent,
    DataViewComponent,
    FooterComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent  {}
