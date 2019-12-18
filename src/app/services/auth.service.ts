import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { APIURL } from 'src/environments/environment.prod';
import { UserInfo } from '../models/UserInfo';

const Api_Url = APIURL

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  role: string;
  loggedIn: boolean;
  isAdmin: boolean;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('id_token')) {
      this.loggedIn = true;
    }
  }

  register(regUserData: RegisterUser) {
    return this.http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const authString =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/token`, authString).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      let email = '';

      this.currentUser().subscribe((user: UserInfo) => {
        email = user.Email;
        
        this.http.get(`${Api_Url}/api/Admin/GetRole/${email}/`, { headers: this.setHeaders() })
          .subscribe((role: string) => {
            this.role = role;
            localStorage.setItem('role', role);
            console.log(role);
            if (role = "Admin") {
              this.isAdmin = true;
            }
          });
      });
      this.loggedIn = true;
      this.router.navigate(['/buddies/current-user']);
      console.log("JSux approves this Login");
    });
  }

  getRole() {
    let email: string;
    this.currentUser().subscribe((user: UserInfo) => {
      email = user.Email;
    })
    return this.http.get(`${Api_Url}/api/Admin/GetRole/${email}/`, { headers: this.setHeaders() })
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }

    return this.http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeaders() });
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('role');
    this.loggedIn = false;

    this.http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeaders() });
    this.router.navigate(['/login']);
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
