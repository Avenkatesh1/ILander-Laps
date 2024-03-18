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
      name:"Admin",
      url:"/Admin"
    },
    {
      name:"User",
      url:"/User"
    },
    {
      name:"Logout",
      url:"/Logout"
    }
  ]
}
