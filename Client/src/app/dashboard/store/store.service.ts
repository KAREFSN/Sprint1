import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreComponent } from './../store/store.component'

const httpOptions = {headers: new HttpHeaders({'Content-type':'application\json'})} ;

@Injectable()
export class StoreService {

  deleteLink= 'http://localhost:3000/api/product/deleteProduct';
  updateLink= 'http://localhost:3000/api/product/updateProduct'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/api/product/getProducts", httpOptions);
  } 
  createProduct(Product):Observable<any>{      
    return this.http.post<any>("http://localhost:3000/api/product/createProduct", Product);
                          
  }  

  deleteProduct(product){   
    return this.http.delete(`${this.deleteLink}/${product._id}`);  
                           
  } 
  updateProduct(OldProd, Newprod :any) :Observable<any>{

    return this.http.patch<any>(`${this.updateLink}/${OldProd._id}`, Newprod);
  }


}
