import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private auth: AuthService, private router: Router, private modalService: NgbModal) { }
  object1: parentObject[] = [];
  object: ProductsModule[] = [];
  pendingProducts: PendingModule[] = [];
  code = ""
  approvedItems={
     id:0,
     status:""
  }
  ngOnInit(): void {
    this.fix();


    // this.fix1();

  }
  async open(content: any, content1: any, id: any) {

    // console.log(this.getdata(id))

    const a = await this.getdata(id);

    console.log(this.code)
    if(this.code=="1")
    {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-titles' })
    }
    if(this.code=="0")
    {
      this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-titles' })
    }

    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-titles' })
    // this.fix1(id);
  }




  fix() {

    this.auth.getallPrdocuts().toPromise().then(res => {
      this.object = res.object;
    });
  }


  changeToCart(userId: number,productId:number ,status:string) {

      this.approvedItems.status=status;
      this.approvedItems.id=productId;
    

     
   
    this.auth.approveCartItems(this.approvedItems,userId).toPromise().then(res => {
      if(res.code==1)
      {
        this.getdata(userId)
      }
    });

  }

  async getdata(id: any): Promise<any> {

    await this.auth.getUserDetails('/user/' + id).toPromise().then(res => {

      if (res.code == 1) {
        this.object1 = [res.object];
        this.code=res.code
        return res.code
      }

      if (res.code == 0) {
        this.object1 = [res];
        this.code=res.code
        return res.code
      }

    });
  }








}

interface ProductsModule {
  readonly id: string | number | null;
  userName: string | null;

}
interface PendingModule {

  productName: string | null;
  price: string | null;
  imgsrc: string | null;

}


export interface Category {
  id: number;
  categoryType: string;
}

export interface Product {
  id: number;
  category: Category;
  productName: string;
  productSupplier?: any;
  price: number;
  imgsrc: string;
}

export interface Cart {
  id: number;
  status: string;
  product: Product;
}

export interface parentObject {
  id: number;
  userName: string;
  cart: Cart[];
}




