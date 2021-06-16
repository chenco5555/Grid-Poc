import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IEntityDataWithActions} from '../components/prime-ng/poc-prime-ng.component';


@Injectable({
  providedIn: 'root',
})
export class TableDataService {

  constructor(private http: HttpClient) { }

  getCustomersLarge() {
    return this.http.get<any>('assets/project-data-large.json')
      .toPromise()
      .then(res => <IEntityDataWithActions[]>res.data)
      .then(data => { return data; });
  }

}
