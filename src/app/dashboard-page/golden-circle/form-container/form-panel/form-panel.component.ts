import { Component, HostListener, OnInit } from '@angular/core';
import { QuestionsService } from '../../../../core/services/questions.service';
import { ImportsModule } from '../../../../imports';

@Component({
  selector: 'form-panel',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './form-panel.component.html',
  styleUrl: './form-panel.component.scss'
})
export class FormPanelComponent implements OnInit {
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

  constructor(private questionsService: QuestionsService) {
    this.screenWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.sections = this.questionsService.getAllQuestions("goldenCircle");
    this.section = this.sections[this.index];
    this.title = this.section.title;
    this.sectionAmount = this.sections.length;
    console.log(this.index)
    this.prevSignal = true;

    console.log(this.sections);
  }

  handleSection(direction:string) {
    if(direction === "back"){
      this.index = this.index - 1;
    } else {
      this.index = this.index + 1;
    }
    this.section = this.questionsService.getAllQuestions("goldenCircle")[this.index];
    this.checkIndex();
  }

  checkIndex() {
    this.index === 0 ?                      this.prevSignal = true : this.prevSignal = false;
    this.index === this.sectionAmount - 1 ? this.nextSignal = true : this.nextSignal = false;
  }

}
