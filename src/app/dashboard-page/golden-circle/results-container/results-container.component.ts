import { Component, HostListener } from '@angular/core';
import { AdminNavbarComponent } from '../../admin-navbar/admin-navbar.component';
import { ImportsModule } from '../../../imports';
import { QuestionsService } from '../../../core/services/questions.service';

@Component({
  selector: 'results-container',
  standalone: true,
  imports: [AdminNavbarComponent, ImportsModule],
  templateUrl: './results-container.component.html',
  styleUrl: './results-container.component.scss'
})
export class ResultsContainerComponent {
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
  tabs: any[] = [];

  constructor(private questionsService: QuestionsService) {}
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.reloadKey = !this.reloadKey;
  }

  ngOnInit() {
    this.sections = this.questionsService.getAllQuestions("goldenCircle");
    this.generateValues();

    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Circulo Dorado', route: '/circulo-dorado' },
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
}
