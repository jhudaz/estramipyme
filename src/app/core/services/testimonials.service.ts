import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  testimonials: any[] = [
    {
      id: 1,
      img: 'assets/images/company1.svg',
      company: 'TechNova Solutions',
      comment:
        'TechNova Solutions ha revolucionado nuestra forma de trabajar con su enfoque innovador en soluciones de software.',
    },
    {
      id: 2,
      img: 'assets/images/company2.svg',
      company: 'Global Logistics Inc.',
      comment:
        'Global Logistics Inc. ofrece servicios logísticos excepcionales que han mejorado nuestra cadena de suministro.',
    },
    {
      id: 3,
      img: 'assets/images/company3.svg',
      company: 'GreenLeaf Organics',
      comment:
        'GreenLeaf Organics es un referente en prácticas sostenibles en la industria agrícola, su compromiso con la calidad es evidente.',
    },
    {
      id: 4,
      img: 'assets/images/company4.svg',
      company: 'Innovative Tech Labs',
      comment:
        'Innovative Tech Labs nos ha ayudado a automatizar nuestros procesos con soluciones tecnológicas avanzadas.',
    },
    {
      id: 5,
      img: 'assets/images/company5.svg',
      company: 'Oceanic Adventures Ltd.',
      comment:
        'Oceanic Adventures Ltd. ofrece experiencias turísticas únicas que han superado nuestras expectativas.',
    },
    {
      id: 6,
      img: 'assets/images/company6.svg',
      company: 'Phoenix Financial Services',
      comment:
        'Phoenix Financial Services nos ha brindado asesoramiento financiero experto que ha optimizado nuestra gestión de activos.',
    },
  ];

  constructor() {}

  getAllTestimonials() {
    return this.testimonials;
  }
}
