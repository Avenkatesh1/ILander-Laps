import { Component } from '@angular/core';
interface Products{
  
  id:string,
  name:string,
  img:string,
  contant:string,
  price:number,
  warnty:number

}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   
  public product: Products[] = [
        {
          id:"ILT1001",
          name:"HP Laptops",
          img:"pimg1.jpeg",
          contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias nemo consectetur Placeat, officia necessitatibus. Voluptas officiis est officia vero! Sint aperiam consectetur id beatae consequuntur consequatur laudantium numquam omnis.",
          price:40000,
          warnty:2
        },
        {
          id:"ILT1001",
          name:"Dell Laptops",
          img:"pimg2.jpeg",
          contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias nemo consectetur Placeat, officia necessitatibus. Voluptas officiis est officia vero! Sint aperiam consectetur id beatae consequuntur consequatur laudantium numquam omnis.",
          price:20000,
          warnty:1
        },
        {
          id:"ILT1003",
          name:"Lanovo Laptops",
          img:"pimg3.jpeg",
          contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias nemo consectetur Placeat, officia necessitatibus. Voluptas officiis est officia vero! Sint aperiam consectetur id beatae consequuntur consequatur laudantium numquam omnis.",
          price:30000,
          warnty:1.6
        },
        {
          id:"ILT1004",
          name:"ASUS Laptops",
          img:"pimg5.jpeg",
          contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias nemo consectetur Placeat, officia necessitatibus. Voluptas officiis est officia vero! Sint aperiam consectetur id beatae consequuntur consequatur laudantium numquam omnis.",
          price:250000,
          warnty:1.8
        },
        {
          id:"ILT1005",
          name:"VIVO Laptops",
          img:"pimg4.jpeg",
          contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias nemo consectetur Placeat, officia necessitatibus. Voluptas officiis est officia vero! Sint aperiam consectetur id beatae consequuntur consequatur laudantium numquam omnis.",
          price:200000,
          warnty:3
        },
        {
          id:"ILT1006",
          name:"MI Laptops",
          img:"pimg6.jpeg",
          contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias nemo consectetur Placeat, officia necessitatibus. Voluptas officiis est officia vero! Sint aperiam consectetur id beatae consequuntur consequatur laudantium numquam omnis.",
          price:350000,
          warnty:1.5
        },
        
  ];
}
