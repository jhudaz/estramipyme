import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { TestimonialsService } from '../../core/services/testimonials.service'

@Component({
  selector: 'testimonials',
  standalone: true,
  imports: [
    CarouselModule,
    ImageModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private testimonialService: TestimonialsService){}

  ngOnInit() {

    
    this.testimonials = this.testimonialService.getAllTestimonials();
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
}
