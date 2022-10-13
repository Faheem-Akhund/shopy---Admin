import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private modalService: NgbModal) { }

   
  newCategory=false;
  errorType=""

  uploadObject1 = {
    productName: '',
    price: '',
    category: {
      id: -1,
      categoryType: '',
    },
    imgsrc: [],
  };

  categories:Categories[]=[]
  object: parentObject[] = [];


  ngOnInit(): void {
   
  }

  upload(modal:any,modal1:any) {

    this.auth.uploadProducts('/product',this.uploadObject1).toPromise().then(res => {
      if(res.code==1)
      {
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' })
      }
      if(res.code==0)
      {
        this.errorType=res.message
        this.modalService.open(modal1, { ariaLabelledBy: 'modal-basic-title' })
      }
    });
      
  }

  disable() {
    this.newCategory=! this.newCategory
  }

  open(content: any) {
    this.getallCategories();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
    
  }


  getallCategories() {

    this.auth.getallCategories().toPromise().then(res => {
      this.categories = res.object;
  
    });

  }










}


interface AuthModel {
  readonly id: string | number | null;
  userName: string | null;

  cart: [productName: string, price: string | null, imgsrc: string] | null;
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

export interface uploadObject {
  productName: string
  price: string
  category: Category
  imgsrc: string

}

interface Categories{
  id: string  ;
  categoryType :string;
  
}


