import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservedValueOf } from 'rxjs';

const AUTH_API = 'http://192.168.10.171:8081';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>  {

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    // .set('Authorization','Bearer ' + localStorage.getItem('token'));

    console.log(username)
    console.log(password)
  
    return this.http.post(AUTH_API + '/adminauthenticate', {username,password },  { headers:headers });
  }


  getUserDetails(api: string ): Observable<any>  {
   

const headers= new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization','Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + api,  { headers:headers });
    // return this.http.get(AUTH_API + 'cart/pending', {
    // });
  }

  getallCategories(): Observable<any>  {  
   
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')  
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
        return this.http.get(AUTH_API + '/allcategories',  { headers:headers });
      }


  uploadProducts(api: string ,reqparam:any ): Observable<any>  {
    
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
        return this.http.post(AUTH_API + api, reqparam, { headers:headers });

    // return this.http.get(AUTH_API + '/users',  { headers:headers });

      }



  getallPrdocuts(): Observable<any>  {
   
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
       
        return this.http.get(AUTH_API + '/users',  { headers:headers });
        
      }
    


  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }


  approveCartItems(items: any,userId:number): Observable<any> {
   
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
        return this.http.post(AUTH_API + '/user/'+userId+'/product', items,{ headers:headers });
        
      }




      sendimage(items: any): Observable<any> {
   
        const headers= new HttpHeaders()
        // .set('content-type', 'application/json')
        .set('Authorization','Bearer ' + localStorage.getItem('token'));
            return this.http.post(AUTH_API + '/purchase', items,{ headers:headers });
            
          }


          viewimage(): Observable<any> {
   
            const headers= new HttpHeaders()
            .set('Authorization','Bearer ' + localStorage.getItem('token'));
                return this.http.get(AUTH_API + '/ibftrequests',{ headers:headers });
                
              }


              allOrders(): Observable<any> {
                const headers= new HttpHeaders()
                .set('Authorization','Bearer ' + localStorage.getItem('token'));
                    return this.http.get(AUTH_API + '/allordersadmin',{ headers:headers });
                    
                  }

                  
              shipOrder(id:Number,orderStatus:number): Observable<any> {
                const headers= new HttpHeaders()
                .set('Authorization','Bearer ' + localStorage.getItem('token'));
                    return this.http.get(AUTH_API + '/shiporder/'+id+'/orderstatus/'+orderStatus,{ headers:headers });
                    
                  }


              purchaseApprove(id:number): Observable<any> {
                const headers= new HttpHeaders()
                .set('Authorization','Bearer ' + localStorage.getItem('token'));
                    return this.http.get(AUTH_API + '/paymentrecieved/'+id,{ headers:headers });
                    
                  }


                  checkSubAdmin()
                  {
                    if(localStorage.getItem('role')=="SUB-ADMIN") 
                    {
                     
                      return true;
                      
                    }
                    else
                    {
                      
                      return false;
                    }
                   
                  }
                  
                  




 
}
