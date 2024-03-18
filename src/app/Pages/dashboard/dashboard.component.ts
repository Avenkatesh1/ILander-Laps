import { Component } from '@angular/core';
   
interface navbar{
  name:string,
  url:any
} 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    
  public nav:navbar[]=[
    {
      name:"Home",
      url:"/Home"
    },
    {
      name:"About",
      url:"/About"
    },
    {
      name:"Products",
      url:"/Products"
    },
    {
      name:"Contant",
      url:"/Contact"
    },
    {
      name:"Register",
      url:"/Register"
    },
    {
      name:"Login",
      url:"/Login"
    }
  ]
}
