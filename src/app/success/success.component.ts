import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})



export class SuccessComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  
  run=false;

   ngmodal:any;



  ngOnInit(): void {

    
  }



  
  open(content: any) {
    
     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-titles' })
}


}
