import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

  constructor(public auth: AuthService,private modalService: NgbModal) { }
  ibftrequests:IBFT[]=[]
 
  ngOnInit(): void {
    this.viewImage()
    
   
    
   
    
  }

 

  viewImage() {
    this.auth.allOrders().toPromise().then(res => {
      this.ibftrequests = res.object;
     
    });
  
  }



  

  shipOrder(id:number,orderStatus:number) {
    this.auth.shipOrder(id,orderStatus).toPromise().then(res => {
      if(res.code=1)
      {
        this.viewImage();
      }
    });
  
  
  }
  
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-titles' })
}

}




interface IBFT{
  purchaseId: number  ;
  orderId: number  ;
  orderStatus :string;
  userName:string;
  cartList:CART[];
  addressProvided:string;
  
}

interface CART{
  product:PRODUCT
  
}

interface PRODUCT
{
  productName:string
  price:string
  imgsrc:string
}
