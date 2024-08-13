import { Component, OnInit, HostListener, Input } from '@angular/core';
import { QuestionsService } from 'src/app/core/services/questions.service';
import { ImportsModule } from 'src/app/imports';

@Component({
  selector: 'custom-form',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.scss'
})
export class CustomFormComponent implements OnInit {
  @Input() methodologyTitle: string = "";
  sections: any = [];
  section: any = {};
  sectionId:number = 1;
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
  

  constructor(private questionsService: QuestionsService) {
    this.screenWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.sections = this.questionsService.getAllQuestions(this.methodologyTitle);
    this.section = this.sections[this.index];
    this.title = this.section.title;
    this.sectionAmount = this.sections.length;
    console.log(this.index)
    this.prevSignal = true;
    this.route = this.routes[this.methodologyTitle];

    
  }

  handleSection(direction:string) {
    if(direction === "back"){
      this.index = this.index - 1;
    } else {
      this.index = this.index + 1;
    }
    this.section = this.questionsService.getAllQuestions(this.methodologyTitle)[this.index];
    this.checkIndex();
  }

  checkIndex() {
    this.index === 0 ?                      this.prevSignal = true : this.prevSignal = false;
    this.index === this.sectionAmount - 1 ? this.nextSignal = true : this.nextSignal = false;
  }
}