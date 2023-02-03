import { makeAutoObservable } from "mobx" 
import { MOCK_PRODUCTS_LIST } from "../assets/static"
import { IProduct } from "../types"

class Product {
  selectedProduct: IProduct = MOCK_PRODUCTS_LIST[0];
  foundProducts: IProduct[] = [];
  allProducts: IProduct [] = MOCK_PRODUCTS_LIST;

  constructor() {
    makeAutoObservable(this)

    this.setFoundProducts([...this.allProducts])
  }

  addNewProduct (product: IProduct) {
    this.allProducts.push(product)
  }

  setSelectedProduct (product: IProduct) {
    this.selectedProduct = product
  }

  setFoundProducts (products: IProduct[]) {
    this.foundProducts = products;
  }
  
  setAllProducts (products: IProduct[]) {
    console.log("all products");
    this.allProducts = products;
    this.foundProducts = this.allProducts;
  }
}

export default new Product ()