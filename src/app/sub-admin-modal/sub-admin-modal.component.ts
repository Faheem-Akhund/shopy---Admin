import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-admin-modal',
  templateUrl: './sub-admin-modal.component.html',
  styleUrls: ['./sub-admin-modal.component.scss']
})
export class SubAdminModalComponent implements OnInit {

  constructor() { }
  subAdmin=false;
  ngOnInit(): void {
  }

  checkSubAdmin()
  {
   
    if(localStorage.getItem('role')=="SUB-ADMIN") 
    {
      this.subAdmin=false;
      console.log("false")
    }
    else
    {
      console.log("true")
      this.subAdmin=true;
    }
   
  }


}
