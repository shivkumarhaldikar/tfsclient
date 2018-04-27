import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Defect } from '../models/defect.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TfsService {

private defects: Defect[];
uri = 'http://richmsbztkd42/tfs/directaccessehr/defect/';
constructor(private httpClient: HttpClient) { }

getDefects(version: string, state: string): Observable<Defect[]> {
    this.defects = new Array<Defect>();
    const pars = new HttpParams()
    .append('version', version)
    .append('state', state);
    console.log(pars);
    this.httpClient.get('http://richmsbztkd42/tfs/directaccessehr/defect/',
    {params: pars, responseType: 'json' }).subscribe(
      (defs: Defect[]) => defs.forEach(def => {
        if (def.Priority === '1') {
          def.Priority = '1 - Critical';
        } else if (def.Priority === '2') {
          def.Priority = '2 - High';
        } else if (def.Priority === '3') {
          def.Priority = '3 - Medium';
        } else if (def.Priority === '4') {
          def.Priority = '4 - Low';
        }
        this.defects.push(def);
      })
    );
    return of(this.defects);
  }
}
