import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  
  radarQuestions:any[] = [
    {
      section_id: 1,
      title: "Propósito y Alineación",
      questions: [
        {
          id: "pq1",
          question: "En una escala del 1 al 10, ¿qué tan alineados están los empleados con el propósito de la empresa?",
          type: "integer",
          scale: [
            1,
            10
          ]
        },
        {
          id: "pq2",
          question: "¿Qué porcentaje de los clientes conoce y valora la misión de la empresa?",
          type: "percentage"
        },
        {
          id: "pq3",
          question: "¿Cuántas iniciativas al año se implementan que estén directamente relacionadas con el propósito de la organización?",
          type: "integer"
        },
        {
          id: "pq4",
          question: "¿Cuál es el porcentaje de empleados que puede articular claramente el propósito de la empresa?",
          type: "percentage"
        },
        {
          id: "pq5",
          question: "¿Qué porcentaje del presupuesto anual se destina a iniciativas relacionadas con el propósito de la empresa?",
          type: "percentage"
        }
      ]
    },
    {
      section_id: 2,
      title: "Procesos y Eficiencia",
      questions: [
        {
          id: "c1",
          question: "¿Cuál es el porcentaje de procesos que están documentados y optimizados?",
          type: "percentage"
        },
        {
          id: "c2",
          question: "En una escala del 1 al 10, ¿qué tan eficientes son los métodos actuales para lograr los objetivos?",
          type: "integer",
          scale: [
            1,
            10
          ]
        },
        {
          id: "c3",
          question: "¿Cuál es la tasa de adopción de nuevas tecnologías o metodologías en la empresa?",
          type: "percentage"
        },
        {
          id: "c4",
          question: "¿Qué porcentaje de proyectos se completan dentro del presupuesto y el plazo estimado?",
          type: "percentage"
        },
        {
          id: "c5",
          question: "¿Cuál es la tasa de errores o defectos en los procesos clave de la empresa?",
          type: "percentage"
        }
      ]
    },
    {
      section_id: 3,
      title: "Productos y Servicios",
      questions: [
        {
          id: "q1",
          question: "¿Cuál es el porcentaje de productos o servicios que generan el 80% de los ingresos?",
          type: "percentage"
        },
        {
          id: "q2",
          question: "¿Cuál es la tasa de crecimiento anual de nuevos productos o servicios?",
          type: "percentage"
        },
        {
          id: "q3",
          question: "¿Qué porcentaje de los productos o servicios actuales están alineados con el 'por qué' de la empresa?",
          type: "percentage"
        },
        {
          id: "q4",
          question: "¿Cuál es la tasa de éxito en el lanzamiento de nuevos productos o servicios?",
          type: "percentage"
        },
        {
          id: "q5",
          question: "¿Qué porcentaje de ingresos se reinvierte en desarrollo de nuevos productos o servicios?",
          type: "percentage"
        }
      ]
    },
    {
      section_id: 4,
      title: "Clientes",
      questions: [
        {
          id: "cl1",
          question: "¿Cuál es el índice de satisfacción del cliente (en una escala del 1 al 10)?",
          type: "integer",
          scale: [
            1,
            10
          ]
        },
        {
          id: "cl2",
          question: "¿Cuál es la tasa de retención de clientes?",
          type: "percentage"
        },
        {
          id: "cl3",
          question: "¿Cuál es el valor promedio de vida del cliente?",
          type: "currency"
        },
        {
          id: "cl4",
          question: "¿Qué porcentaje de clientes repiten compras dentro del primer año?",
          type: "percentage"
        },
        {
          id: "cl5",
          question: "¿Cuál es la tasa de crecimiento de la base de clientes?",
          type: "percentage"
        }
      ]
    },
    {
      section_id: 5,
      title: "Competencia",
      questions: [
        {
          id: "co1",
          question: "¿Cuál es la cuota de mercado de la empresa en comparación con los principales competidores?",
          type: "percentage"
        },
        {
          id: "co2",
          question: "¿Cuántos competidores directos han surgido en el último año?",
          type: "integer"
        },
        {
          id: "co3",
          question: "En una escala del 1 al 10, ¿qué tan diferenciados son nuestros productos/servicios de la competencia?",
          type: "integer",
          scale: [
            1,
            10
          ]
        },
        {
          id: "co4",
          question: "¿Cuál es el porcentaje de mercado capturado en los últimos 3 años?",
          type: "percentage"
        },
        {
          id: "co5",
          question: "¿Qué porcentaje de la oferta de productos/servicios es única en el mercado?",
          type: "percentage"
        }
      ]
    },
    // {
    //   section_id: 6,
    //   title: "Datos y Análisis",
    //   questions: [
    //     {
    //       id: "da1",
    //       question: "¿Qué porcentaje de decisiones estratégicas se toman basadas en datos?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "da2",
    //       question: "¿Cuál es la tasa de precisión de las predicciones basadas en datos de la empresa?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "da3",
    //       question: "¿Qué porcentaje del presupuesto se invierte en tecnologías de análisis de datos?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "da4",
    //       question: "¿Cuál es la tasa de adopción de herramientas de análisis de datos entre los empleados?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "da5",
    //       question: "¿Qué porcentaje de los procesos de negocio están automatizados a través de análisis de datos?",
    //       type: "percentage"
    //     }
    //   ]
    // },
    // {
    //   section_id: 7,
    //   title: "Innovación",
    //   questions: [
    //     {
    //       id: "in1",
    //       question: "¿Cuántas patentes o nuevas ideas se han registrado en el último año?",
    //       type: "integer"
    //     },
    //     {
    //       id: "in2",
    //       question: "¿Qué porcentaje de los ingresos proviene de productos/servicios lanzados en los últimos 3 años?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "in3",
    //       question: "¿Cuál es la tasa de éxito de los proyectos de innovación?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "in4",
    //       question: "¿Cuál es el porcentaje de presupuesto asignado a I+D en comparación con los ingresos totales?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "in5",
    //       question: "¿Cuántos proyectos de innovación pasan del concepto a la comercialización?",
    //       type: "integer"
    //     }
    //   ]
    // },
    // {
    //   section_id: 8,
    //   title: "Recursos Humanos",
    //   questions: [
    //     {
    //       id: "re1",
    //       question: "¿Cuál es la tasa de rotación de empleados?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "re2",
    //       question: "¿Qué porcentaje del presupuesto se destina a la capacitación y desarrollo del personal?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "re3",
    //       question: "En una escala del 1 al 10, ¿qué tan eficiente es el uso de los recursos actuales?",
    //       type: "integer",
    //       scale: [
    //         1,
    //         10
    //       ]
    //     },
    //     {
    //       id: "re4",
    //       question: "¿Cuál es el porcentaje de vacantes llenadas internamente a través de promociones?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "re5",
    //       question: "¿Cuál es el índice de satisfacción laboral entre los empleados?",
    //       type: "integer",
    //       scale: [
    //         1,
    //         10
    //       ]
    //     }
    //   ]
    // },
    // {
    //   section_id: 9,
    //   title: "Regulación y Cumplimiento",
    //   questions: [
    //     {
    //       id: "rg1",
    //       question: "¿Cuántas multas o sanciones ha recibido la empresa en el último año por incumplimiento regulatorio?",
    //       type: "integer"
    //     },
    //     {
    //       id: "rg2",
    //       question: "¿Qué porcentaje de los empleados ha completado la capacitación en cumplimiento normativo?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "rg3",
    //       question: "En una escala del 1 al 10, ¿qué tan preparada está la empresa para cambios regulatorios en su industria?",
    //       type: "integer",
    //       scale: [
    //         1,
    //         10
    //       ]
    //     },
    //     {
    //       id: "rg4",
    //       question: "¿Cuál es el porcentaje de procesos internos que cumplen con las regulaciones vigentes?",
    //       type: "percentage"
    //     },
    //     {
    //       id: "rg5",
    //       question: "¿Cuál es la frecuencia de auditorías internas para asegurar el cumplimiento?",
    //       type: "integer"
    //     }
    //   ]
    // }
  ]

  goldenCircleQuestions:any[] = [
    {
      section_id: 1,
      title: "Por que?",
      questions: [
        {
          id: "po1",
          question: "En una escala del 1 al 10, ¿cómo evaluarías la misión de tu empresa?",
          type: "integer",
          scale: [1, 10]
        },
        {
          id: "po2",
          question: "¿Qué porcentaje de los empleados entiende y se identifica con la misión de la empresa?",
          type: "percentage"
        }
      ]
    },
    {
      section_id: 2,
      title: "Como?",
      questions: [
        {
          id: "com1",
          question: "¿Cuántos procesos de innovación se implementaron en el último año?",
          type: "integer"
        },
        {
          id: "com2",
          question: "En una escala del 1 al 10, ¿cómo calificarías la eficiencia de tus procesos actuales?",
          type: "integer",
          scale: [1, 10]
        },
        {
          id: "com3",
          question: "¿Cuál es el porcentaje de cumplimiento de los objetivos estratégicos establecidos para este año?",
          type: "percentage"
        }
      ]
    },
    {
      section_id: 3,
      title: "Que?",
      questions: [
        {
          id: "qu1",
          question: "¿Cuántos productos o servicios ofrece actualmente tu empresa?",
          type: "integer"
        },
        {
          id: "qu2",
          question: "¿Qué porcentaje de tus productos/servicios son altamente valorados por los clientes?",
          type: "percentage"
        },
        {
          id: "qu3",
          question: "En una escala del 1 al 10, ¿cómo calificarías la calidad de tus productos/servicios?",
          type: "integer",
          scale: [1, 10]
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
    console.log(quetionsSetName);
    console.log(this.questionsSet[quetionsSetName]);
    return this.questionsSet[quetionsSetName];
  }


}
