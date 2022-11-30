import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    
    userName = new BehaviorSubject<string>('Max');
    
   
}