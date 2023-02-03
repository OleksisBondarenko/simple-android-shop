import { makeAutoObservable } from "mobx" 
import { MOCK_PRODUCTS_LIST } from "../assets/static"
import { IProduct } from "../types"

class Product {
  selectedProduct: IProduct = MOCK_PRODUCTS_LIST[0]
  foundProducts: IProduct[] = [];
  allProducts: IProduct [] = MOCK_PRODUCTS_LIST

  constructor() {
    makeAutoObservable(this)

    this.foundProducts.push(...this.allProducts)
  }

  addNewProduct (product: IProduct) {
    this.foundProducts.push(product)
  }

  setSelectedProduct (product: IProduct) {
    this.selectedProduct = product
  }
}

export default new Product ()