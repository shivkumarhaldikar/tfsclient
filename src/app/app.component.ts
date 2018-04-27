import { Component, ViewChild } from '@angular/core';
import { DefectComponent } from './components/defect/defect.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(DefectComponent) defCmp: DefectComponent;
  title = 'app';
}
