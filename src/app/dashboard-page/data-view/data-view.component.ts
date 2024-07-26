import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { MethodologiesService } from 'src/app/core/services/methodologies.service';
import { ImportsModule } from 'src/app/imports';

@Component({
  selector: 'data-view',
  standalone: true,
  imports: [ImportsModule, RouterLink],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss'
})
export class DataViewComponent  implements OnInit{
  methods: any[] = [];
  path:string = "";


  constructor(private methodologiesService : MethodologiesService) {}
  
  ngOnInit(){
    this.methods = this.methodologiesService.getAllMethodologies();
  }

  handlePath(key: 'radar' | 'circle'):string{
    const paths = {
      radar: "/radar",
      circle:"/circulo-dorado"
    }
    this.path = paths[key]

    return this.path;
  }
}
