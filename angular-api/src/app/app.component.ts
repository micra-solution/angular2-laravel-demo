import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private userService: UserService){
		
	}

	ngOnInit() {
  
  	}

  	logout(){
  		localStorage.removeItem('token')
  		localStorage.removeItem('user')
  		localStorage.removeItem('loggedIn')
  	}
}
