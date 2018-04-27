import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefectComponent } from './components/defect/defect.component';
import { TfsService } from './services/tfs.service';
import { InterceptorModule } from './intercepter.module';
import { LoadingModule } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';
/*
npm i ngx-pagination --save
npm i ngx-loading --save
*/


@NgModule({
  declarations: [
    AppComponent,
    DefectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    LoadingModule,
    NgxPaginationModule
  ],
  providers: [TfsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
