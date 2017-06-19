import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/Rx';

@Injectable()
export class UserService {

    api = 'http://localhost:8000/api';

    constructor(private http: Http,private router: Router){}
    
    login(credentials){
        return this.http.post(this.api+'/auth',credentials)
        .map((response: Response) => {
             return response.json();   
        });
    }

    register(form){
        return this.http.post(this.api+'/register',form)
        .map((response: Response) => {
                return response.json();
        })
    }

    getUser(){
        var user = JSON.parse(localStorage.getItem('user'))
        return user;
    }

    canActivate(){
        var item = localStorage.getItem('loggedIn')
        if(!item){
            this.router.navigate(['/'])
            return false;
        }
        else{
            return true;
        }
        
    }

    loggedIn(){
        var item = localStorage.getItem('loggedIn')
        return item;
    }


}