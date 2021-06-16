import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IEntityData} from '../components/prime-ng/prime-ng.component';


@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomersSmall() {
    return this.http.get<any>('assets/customers-small.json')
      .toPromise()
      .then(res => <IEntityData[]>res.data)
      .then(data => { return data; });
  }

  getCustomersMedium() {
    return this.http.get<any>('assets/customers-medium.json')
      .toPromise()
      .then(res => <IEntityData[]>res.data)
      .then(data => { return data; });
  }

  getCustomersLarge() {
    return this.http.get<any>('assets/project-data-large.json')
      .toPromise()
      .then(res => <IEntityData[]>res.data)
      .then(data => { return data; });
  }

  getCustomersXLarge() {
    return this.http.get<any>('assets/customers-xlarge.json')
      .toPromise()
      .then(res => <IEntityData[]>res.data)
      .then(data => { return data; });
  }

}
