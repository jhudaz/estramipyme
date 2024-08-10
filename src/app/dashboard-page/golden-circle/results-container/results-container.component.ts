import { Component, HostListener } from '@angular/core';
import { AdminNavbarComponent } from '../../admin-navbar/admin-navbar.component';
import { ImportsModule } from '../../../imports';
import { QuestionsService } from '../../../core/services/questions.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'results-container',
  standalone: true,
  imports: [AdminNavbarComponent, ImportsModule, FooterComponent],
  templateUrl: './results-container.component.html',
  styleUrl: './results-container.component.scss',
})
export class ResultsContainerComponent {
  data: any = {};
  options: any = {};
  reloadKey = true;
  sections: any[] = [];
  items: any[] = [];
  whyColor: string = '#0d3b66';
  howColor: string = 'orange';
  whatColor: string = '#f4d35e';

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
          data: [24,16,14],
          backgroundColor: [
            this.whyColor, 
            this.howColor, 
            this.whatColor
          ],
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
