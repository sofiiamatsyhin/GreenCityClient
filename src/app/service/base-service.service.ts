import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
   protected apiUrl = 'https://greencitysoftserve.herokuapp.com/';

  constructor(protected http: HttpClient) {}
}