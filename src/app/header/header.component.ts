import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  constructor() { }

  subAdmin=false;

  ngOnInit(): void {
    this.checkSubAdmin();
  }

   checkSubAdmin()
  {
    if(localStorage.getItem('role')=="SUB-ADMIN") 
    {
      this.subAdmin=false;
      
    }
    else
    {
     
      this.subAdmin=true;
    }
   
  }
  
  }

  
if(localStorage.getItem('role'))
{
  let navigation ="";
   
}




  

