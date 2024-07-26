import { Component, OnInit, HostListener } from '@angular/core';
import { ImportsModule } from '../../../../imports';
import { QuestionsService } from '../../../../core/services/questions.service';

@Component({
  selector: 'form-panel',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.scss']
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
    this.sections = this.questionsService.getAllRadarQuestions();
    this.section = this.sections[this.index];
    this.title = this.section.title;
    this.sectionAmount = this.sections.length;
    this.prevSignal = true;
  }

  handleSection(direction:string) {
    if(direction === "back"){
      this.index = this.index - 1;
    } else {
      this.index = this.index + 1;
    }
    this.section = this.questionsService.getAllRadarQuestions()[this.index];
    this.checkIndex();
  }

  checkIndex() {
    this.index === 0 ?                      this.prevSignal = true : this.prevSignal = false;
    this.index === this.sectionAmount - 1 ? this.nextSignal = true : this.nextSignal = false;
  }

}
