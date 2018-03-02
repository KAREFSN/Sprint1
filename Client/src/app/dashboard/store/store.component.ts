import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { HttpClient } from '@angular/common/http/src/client';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  tableData: any[];
  addProduct: boolean= false;
  EditProduct: boolean=false;
  Product: any={name:'', price:0, createdAt:Date.now(), sellerName:''};
  OldProduct: any={name:'', price:0, createdAt:Date.now(), sellerName:''};

 
  

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    
    this.getProducts();
  
  }

  
  getProducts(): void {
    var self = this;
    this.storeService.getProducts()
      .subscribe(function (prods) {
        self.tableData = prods.data;
        self.tableData = self.tableData.filter(function (element, index, array) {
          return element.sellerName === 'Nehal Essam'; 
           
        });
      });
  }
  save(Product): void{
    this.storeService.createProduct(Product).subscribe();
    this.getProducts();

     
  }
  
  edit(product): void{
    this.OldProduct.name = product.name;
    this.OldProduct.price = product.price;
    this.OldProduct.sellerName = product.sellerName;
    this.OldProduct = product;
    this.EditProduct=true;
  }

  

  addprod(): void{
    this.addProduct = true;
   
    }

    removeEdit(): void{
      this.EditProduct = false;

    }

    cancel(): void {
      this.addProduct=false;
    }

   DeleteProd (product):void {  
     this.tableData= this.tableData.filter(Product=> Product._id!==product._id);
    this.storeService.deleteProduct(product).subscribe(()=> console.log("DELETED!"));

   
}
   

update(Newprod:any) :void{
  const Oldprod= this.OldProduct;
  this.storeService.updateProduct(Oldprod, Newprod).subscribe();
 this.getProducts();
         
     
  
  
  
}
}
