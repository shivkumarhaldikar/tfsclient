import { Component, OnInit, NgModule, AfterViewChecked } from '@angular/core';
import { TfsService } from '../../services/tfs.service';
import { Defect } from '../../models/defect.model';

@Component({
  selector: 'app-defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.css']
})
export class DefectComponent implements OnInit, AfterViewChecked {

  defects: Defect[];
  loading: boolean;
  show: boolean;
  constructor(private tfsService: TfsService) { }

  ngOnInit() {
    this.show = false;
  }

  ngAfterViewChecked() {
     if (this.loading) {
       this.loading = false;
       this.show = true;
     }
  }

  search(e) {
    this.defects = new Array<Defect>();
     this.loading = true;
     console.log(this.loading);
     this.tfsService.getDefects(e.form.value.ver, e.form.value.state).subscribe(
      (defs: Defect[]) => {
        this.defects = defs;
      }, err => {
        this.loading = false; }
    );
  }
}
