import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Register } from '../register.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerdata: Register;
    errorMessage;
    submitted = false;

  constructor(private userService: UserService,private router: Router) {
    this.registerdata = {
      name:'',
      email:'',
      password:'',
      confirmpassword:''
    }
  }

  ngOnInit() {
  }

  register(form,isValid: boolean){
    this.submitted = true;
      if(isValid){
      	this.userService.register(form)
      	.subscribe( response => {
            if(response.token){
                this.router.navigate(['/login'])
            }
            else{
                if(response.error_status){
                    this.errorMessage = 'this email already taken'
                }    
            }
            
        }),
      	(error: Response) => console.log(error);
    }
  }

}
