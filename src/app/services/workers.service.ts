import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {Settings} from "../utils/settings";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WorkersService implements CRUDServiceInterface {

  constructor(private http:HttpClient) {
  }

  fetch(filters?: any): Observable<any> {
    return this.http.get(Settings.WORKERS_END_POINT);
  }

  add(item): Observable<any> {
    return null;
  }

  update(item): Observable<any> {
    return null;
  }

  remove(id): Observable<any> {
    return this.http.delete(Settings.WORKERS_END_POINT + "/" + id);
  }
}
