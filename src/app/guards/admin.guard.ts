import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            var role = localStorage.getItem('role');
            console.log(role);
            if (role == 'Admin')
                 {
                return observer.next(true);
            } else {
                this.router.navigate(['/login']);
                return observer.next(false);
            } 

        })
    }
}