import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  public adminPermission$= new BehaviorSubject<boolean>(true);
  constructor() { }
}
