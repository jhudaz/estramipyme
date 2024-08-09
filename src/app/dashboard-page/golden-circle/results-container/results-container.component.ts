import { Component, HostListener } from '@angular/core';
import { AdminNavbarComponent } from '../../admin-navbar/admin-navbar.component';
import { ImportsModule } from '../../../imports';
import { QuestionsService } from '../../../core/services/questions.service';

@Component({
  selector: 'results-container',
  standalone: true,
  imports: [AdminNavbarComponent, ImportsModule],
  templateUrl: './results-container.component.html',
  styleUrl: './results-container.component.scss',
})
export class ResultsContainerComponent {
  data: any = {};
  options: any = {};
  reloadKey = true;
  sections: any[] = [];
  items: any[] = [];
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
    this.sections = this.questionsService.getAllQuestions('goldenCircle');

    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Circulo Dorado', route: '/circulo-dorado' },
      { label: 'Resultados' },
    ];

    this.data = {
      datasets: [
        {
          data: [34,56,23],
          backgroundColor: ['red', 'yellow', 'green'],
          label: 'My dataset',
        },
      ],
      labels: ["Por que", "Como", "Que"],
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
}
