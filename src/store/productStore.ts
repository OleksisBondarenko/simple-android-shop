import { makeAutoObservable } from "mobx" 
import { MOCK_PRODUCTS_LIST } from "../assets/static"
import { IProduct } from "../types"

class Product {
  selectedProduct: IProduct = MOCK_PRODUCTS_LIST[0]
  foundProducts: IProduct[] = MOCK_PRODUCTS_LIST

  constructor() {
    makeAutoObservable(this)
  }

  addNewProduct (product: IProduct) {
    this.foundProducts.push(product)
  }

  setSelectedProduct (product: IProduct) {
    this.selectedProduct = product
  }
}

export default new Product ()