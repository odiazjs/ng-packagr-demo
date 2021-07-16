import { Characteristics } from './../../characteristics';
import { RequestInstance } from './../../requestInstance';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getRequestInstance(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(RequestInstance)
    }).pipe(delay(2500))
  }

  getCharacteristics(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(RequestInstance)
    }).pipe(delay(2500))
  }

}

