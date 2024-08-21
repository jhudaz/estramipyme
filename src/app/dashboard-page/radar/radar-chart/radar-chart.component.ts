import { Component, OnInit, HostListener } from '@angular/core';
import { AdminNavbarComponent } from '../../admin-navbar/admin-navbar.component';
import { ImportsModule } from '../../../imports';
import { QuestionsService } from '../../../core/services/questions.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'radar-chart',
  standalone: true,
  imports: [AdminNavbarComponent, ImportsModule, FooterComponent],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.scss',
})
export class RadarChartComponent implements OnInit {
  reloadKey = true;
  sections: any[] = [];
  items: any[] = [];
  data: any = {};
  options: any = {};
  firstDataSetColor: string = 'blue';
  secondDataSetColor: string = '#4FB33B';
  firstDataSetLabel: string = 'Resultados esperados';
  secondDataSetLabel: string = 'Resultados obtenidos';
  firstDataSetValues: any[] = [];
  secondDataSetValues: any[] = [];
  values: any[] = [
    {
      perception: "Buena",
      value: Math.floor(Math.random() * (100 - 67 + 1)) + 67,
      severity: "success"
    },
    {
      perception: "Regular",
      value: Math.floor(Math.random() * (66 - 34 + 1)) + 34,
      severity: "primary"
    },
    {
      perception: "Mala",
      value: Math.floor(Math.random() * (33 - 1 + 1)) + 1,
      severity: "warning"
    }

  ]


  constructor(private questionsService: QuestionsService) {}
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.reloadKey = !this.reloadKey;
  }

  ngOnInit() {
    this.sections = this.questionsService.getAllRadarQuestions();
    this.generateValues();

    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Radar Estratetigico', route: '/radar' },
      { label: 'Resultados' },
    ];

    this.data = {
      labels: [...this.sections.map((section) => section.title)],
      datasets: [
        {
          label: this.firstDataSetLabel,
          borderColor: this.firstDataSetColor,
          pointBackgroundColor: this.firstDataSetColor,
          pointBorderColor: this.firstDataSetColor,
          pointHoverBackgroundColor: this.firstDataSetColor,
          pointHoverBorderColor: this.firstDataSetColor,
          data: this.firstDataSetValues,
        },
        {
          label: this.secondDataSetLabel,
          borderColor: this.secondDataSetColor,
          pointBackgroundColor: this.secondDataSetColor,
          pointBorderColor: this.secondDataSetColor,
          pointHoverBackgroundColor: this.secondDataSetColor,
          pointHoverBorderColor: this.secondDataSetColor,
          data: this.secondDataSetValues,
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: 'black',
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: 'black',
          },
          pointLabels: {
            color: 'black',
          },
        },
      },
    };
  }

  generateValues() {
    this.sections.forEach((section) => {
      this.firstDataSetValues.push(Math.random() * 100);
      this.secondDataSetValues.push(Math.random() * 100);
    });
  }
  chooseValue() {
    let random = Math.floor(Math.random() * this.values.length);

    return this.values[random];
  }
  
}
