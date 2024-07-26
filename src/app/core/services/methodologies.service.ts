import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodologiesService {

  methodologies: any[] = [
    {
      id: 1,
      link: "circle",
      title: "Círculo Dorado",
      description: "El Círculo Dorado es una metodología propuesta por Simon Sinek que se centra en tres niveles de comunicación: 'Por qué', 'Cómo' y 'Qué'. Según Sinek, las empresas y líderes exitosos comienzan comunicando el 'Por qué' (su propósito o causa), luego el 'Cómo' (los procesos o valores que los distinguen) y finalmente el 'Qué' (los productos o servicios que ofrecen). Esta metodología ayuda a inspirar y motivar a los equipos y clientes alineando las acciones con el propósito central.",
      img: "assets/images/circle.svg",
      isLoading: true

    },
    {
      id: 2,
      link: "radar",
      title: "Radar Estratégico",
      description: "El Radar Estratégico es una herramienta para la planificación y evaluación estratégica que permite a las organizaciones mapear y analizar su posición en relación con el entorno competitivo y las tendencias emergentes. Utiliza un enfoque visual para identificar oportunidades y amenazas, evaluando diferentes áreas de la estrategia como el mercado, la competencia, la innovación y las capacidades internas. El Radar Estratégico ayuda a las empresas a ajustar sus estrategias y mantenerse ágiles en un entorno cambiante.",
      img: "assets/images/radar.svg",
      isLoading: true
    }
  ];
  constructor() { }

  getAllMethodologies() {
    return this.methodologies;
  }
}
