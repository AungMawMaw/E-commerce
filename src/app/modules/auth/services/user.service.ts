import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL = environment.userApiUrl;

  private _user = new BehaviorSubject<User | null>(null);

  public user$ = this._user.asObservable();

  constructor(private http: HttpClient) {}
  login(user: Pick<User, 'email' | 'password'>) {
    if (user.email === 'user@user.user' && user.password === 'password') {
      const passUser: User = {
        email: user.email,
        password: user.password,
        name: 'username',
      };
      this._user.next(passUser);
    }
  }
}
