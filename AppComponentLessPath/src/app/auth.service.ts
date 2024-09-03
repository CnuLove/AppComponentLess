import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthservice$ = new BehaviorSubject<boolean>(true);
  public userData$=of([
    {name:"seenu",id:"1",role:"admin"}
  ])
  constructor() { }
}
