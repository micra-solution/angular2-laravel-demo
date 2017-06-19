import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from '../login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Login; 
  errorMessage;
  submitted = false;

  constructor(private userService: UserService,private router: Router) {
    

  }

  ngOnInit() {
        if(this.userService.loggedIn()){
            this.router.navigate(['/dashboard']);
        }
        else{
          this.credentials = {
            email:'',
            password:''
          }
        }
        
  }

  login(form, isValid: boolean){
  this.submitted = true;
	  if(isValid){
      this.userService.login(form)
      .subscribe( response => {
          if(response.token){
              localStorage.setItem('loggedIn','true')
              localStorage.setItem('token',JSON.stringify(response.token))
              localStorage.setItem('user',JSON.stringify(response.user))
              this.router.navigate(['/dashboard']);
          }
          else{
              if(response.error_status == 401){
                  this.errorMessage = 'Invalid Credentials'
              }
          }
      })
    }
  }

}
