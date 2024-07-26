import { Component } from '@angular/core';

@Component({
  selector: 'intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  videoURL = 'assets/videos/estramipyme.mp4';
  introImgURL = 'assets/images/intro.svg'
}
