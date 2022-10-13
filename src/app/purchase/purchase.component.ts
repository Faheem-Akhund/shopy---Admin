import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  

  ngOnInit(): void {
    this.viewImage()
  }

  constructor(private httpClient: HttpClient,private auth: AuthService,private modalService: NgbModal) { }
  ibftrequests:IBFT[]=[]
  uploadedImage:any;
  dbImage: any;
  postResponse: any;
  successResponse= "";
  image: any;
  count=1;

  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
    console.log( this.uploadedImage)
  }

  imageUploadAction() {

    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage);
   
    this.auth.sendimage(imageFormData).toPromise().then(res => {
    });


  }


  open(content: any, id: any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-titles' })
  }


  viewImage() {
    this.auth.viewimage().toPromise().then(res => {
      this.ibftrequests = res.object;
    });

   

}
purchase(id:number) {
  this.auth.purchaseApprove(id).toPromise().then(res => {

    if(res.code==1)
    {
      this.viewImage();
    }
   
  });
}


}


interface IBFT{
  id: number  ;
  image :string;
  userId:number;
  userName:string;
  cartList:CART[];
  base64:string;
  
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



