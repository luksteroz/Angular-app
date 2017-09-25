import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Settings} from "../utils/settings";

@Injectable()
export class ItemsService implements CRUDServiceInterface {

  constructor(private http:HttpClient) {
  }

  fetch(filters?: any): Observable<any> {
    let params = new HttpParams();

    for (let key in filters) {
      params = params.append(key, filters[key]);
    }

    return this.http.get(Settings.ITEMS_END_POINT, {params});
  }

  add(item): Observable<any> {
    return this.http.post(Settings.ITEMS_END_POINT, item);
  }

  update(item): Observable<any> {
    return null;
  }

  remove(id): Observable<any> {
    return this.http.delete(Settings.ITEMS_END_POINT + "/" + id);
  }
}
