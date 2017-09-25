import {Observable} from 'rxjs/Observable';

export interface CRUDServiceInterface {
  fetch (filters?:any): Observable<any>;
  add (item): Observable<any>;
  update (item): Observable<any>;
  remove (id): Observable<any>;
}
