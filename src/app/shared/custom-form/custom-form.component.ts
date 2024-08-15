import { Component, OnInit, HostListener, Input } from '@angular/core';
import { QuestionsService } from 'src/app/core/services/questions.service';
import { ImportsModule } from 'src/app/imports';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'custom-form',
  standalone: true,
  imports: [ImportsModule, SliderModule, FormsModule ],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.scss'
})
export class CustomFormComponent implements OnInit {
  @Input() methodologyTitle: string = "";
  sections: any = [];
  currentSection: any = {};
  questions: any = {};
  title:string ="";
  sectionAmount: number = 0;
  prevSignal:boolean = false;
  nextSignal:boolean = false;
  index:number = 0;
  screenWidth: number = 0;
  routes:any ={
    goldenCircle: "/circulo-dorado-resultados",
    radar: "/radar-resultados"
  };
  route:string = "";
  answers: { [key: string]: number } = {};
  

  constructor(private questionsService: QuestionsService) {
    this.screenWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.sections = this.questionsService.getAllQuestions(this.methodologyTitle)
    this.currentSection = this.sections[this.index];
    this.title = this.currentSection.title;
    this.sectionAmount = this.sections.length;
    this.prevSignal = true;
    this.route = this.routes[this.methodologyTitle];
    this.sections.forEach((section: any) => {
      section.questions.forEach((question: any) => {
        this.answers[question.id] = 0;
      });
    });
    
  }
  onSliderChange(questionId: string, value:any) {
    this.answers[questionId] = value;
  }


  handleSection(direction:string) {
    if(direction === "back"){
      this.index = this.index - 1;
    } else {
      this.index = this.index + 1;
    }
    this.currentSection = this.questionsService.getAllQuestions(this.methodologyTitle)[this.index];
    this.checkIndex();
  }

  checkIndex() {
    this.index === 0 ?                      this.prevSignal = true : this.prevSignal = false;
    this.index === this.sectionAmount - 1 ? this.nextSignal = true : this.nextSignal = false;
  }
}