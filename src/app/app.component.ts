import { Component } from '@angular/core';

interface navbar{
  name:string,
  url:any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ILander_Laps-WebApp';

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
      name:"Dashboard",
      url:"/Dashboard"
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
