import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImportsModule } from '../imports';


@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    IntroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent,
    ImportsModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingPageComponent {

}
