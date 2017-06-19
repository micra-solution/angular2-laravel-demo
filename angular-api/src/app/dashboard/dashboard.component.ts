import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user;

  constructor(
  	private userService: UserService,
  	private router: Router
  	){
		this.user = userService.getUser()
	}

  ngOnInit() {
  		
  }

}
