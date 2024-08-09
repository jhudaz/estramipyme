import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  
  radarQuestions: any[] = [
    {
      section_id: 1,
      title: "Propósito y Alineación",
      questions: [
        {
          id: "pq1",
          question: "En una escala del 1 al 100, ¿qué tan alineados están los empleados con el propósito de la empresa?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "pq6",
          question: "En una escala del 1 al 100, ¿cómo evaluarías el compromiso de la dirección con el propósito de la empresa?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "pq7",
          question: "En una escala del 1 al 100, ¿qué tan clara es la comunicación del propósito a todos los niveles de la organización?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    },
    {
      section_id: 2,
      title: "Procesos y Eficiencia",
      questions: [
        {
          id: "c2",
          question: "En una escala del 1 al 100, ¿qué tan eficientes son los métodos actuales para lograr los objetivos?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "c6",
          question: "En una escala del 1 al 100, ¿qué tan eficientes son los procesos internos en comparación con los estándares de la industria?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "c7",
          question: "En una escala del 1 al 100, ¿cómo evaluarías la flexibilidad de los procesos para adaptarse a cambios rápidos?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    },
    {
      section_id: 3,
      title: "Productos y Servicios",
      questions: [
        {
          id: "q6",
          question: "En una escala del 1 al 100, ¿qué tan alineados están nuestros productos/servicios con las necesidades del mercado?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "q7",
          question: "En una escala del 1 al 100, ¿cómo calificarías la calidad general de nuestros productos/servicios?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "q8",
          question: "En una escala del 1 al 100, ¿qué tan innovadores son nuestros productos/servicios en comparación con los competidores?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    },
    {
      section_id: 4,
      title: "Clientes",
      questions: [
        {
          id: "cl1",
          question: "¿Cuál es el índice de satisfacción del cliente (en una escala del 1 al 100)?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "cl6",
          question: "En una escala del 1 al 100, ¿qué tan bien se manejan las quejas y reclamos de los clientes?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "cl7",
          question: "En una escala del 1 al 100, ¿qué tan leales son los clientes a la empresa?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    },
    {
      section_id: 5,
      title: "Competencia",
      questions: [
        {
          id: "co3",
          question: "En una escala del 1 al 100, ¿qué tan diferenciados son nuestros productos/servicios de la competencia?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "co6",
          question: "En una escala del 1 al 100, ¿cómo calificarías nuestra capacidad de respuesta a las estrategias de la competencia?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "co7",
          question: "En una escala del 1 al 100, ¿qué tan competitivos son nuestros precios en comparación con los principales competidores?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    }
  ]
  

  goldenCircleQuestions: any[] = [
    {
      section_id: 1,
      title: "Por qué?",
      questions: [
        {
          id: "po1",
          question: "En una escala del 1 al 100, ¿cómo evaluarías la misión de tu empresa?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "po3",
          question: "En una escala del 1 al 100, ¿qué tan alineada está la misión con las operaciones diarias de la empresa?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "po4",
          question: "En una escala del 1 al 100, ¿cómo calificarías el impacto de la misión en la cultura organizacional?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    },
    {
      section_id: 2,
      title: "Cómo?",
      questions: [
        {
          id: "com2",
          question: "En una escala del 1 al 100, ¿cómo calificarías la eficiencia de tus procesos actuales?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "com4",
          question: "En una escala del 1 al 100, ¿qué tan bien están implementados los procesos innovadores?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "com5",
          question: "En una escala del 1 al 100, ¿cómo calificarías la agilidad de la empresa para adaptarse a cambios?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    },
    {
      section_id: 3,
      title: "Qué?",
      questions: [
        {
          id: "qu3",
          question: "En una escala del 1 al 100, ¿cómo calificarías la calidad de tus productos/servicios?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "qu4",
          question: "En una escala del 1 al 100, ¿qué tan bien están alineados tus productos/servicios con las necesidades del mercado?",
          type: "integer",
          scale: [1, 100]
        },
        {
          id: "qu5",
          question: "En una escala del 1 al 100, ¿cómo evaluarías la competitividad de tus productos/servicios?",
          type: "integer",
          scale: [1, 100]
        }
      ]
    }
  ];
  

  questionsSet:any = {
    radar:this.radarQuestions,
    goldenCircle:this.goldenCircleQuestions
  }
  

  constructor() {}

  getAllRadarQuestions(){
    return this.radarQuestions;
  }

  getRadarSectionQuestions(sectionId: number) {
    return this.radarQuestions.find(section => section.section_id === sectionId)
  }

  getAllGoldenCircleQuestions(){
    return this.goldenCircleQuestions;
  }

  getAllQuestions(quetionsSetName:string){
    return this.questionsSet[quetionsSetName];
  }


}
