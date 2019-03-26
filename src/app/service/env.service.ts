import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public apiUrl = '/api';
  public enableDebug = true;
  constructor() { }
}
