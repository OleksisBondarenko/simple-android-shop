import { makeAutoObservable } from "mobx" 
import { MOCK_PRODUCTS_LIST } from "../assets/static"
import { IProduct, IProductCount, IUser } from "../types"
import { DEFAULT_USER_IMAGE } from "../assets/static"

class Product {
  loaded: boolean = true;


  constructor() {
    makeAutoObservable(this)

    // this.user.cartProducts.push(...MOCK_PRODUCTS_LIST.filter(product => product.isAvailable).map(product => {return {...product, count: 1, key: Symbol(product.name) } as IProductCount}))
  }

  loading () {
    this.loaded = true;
  }

  fulfilled () {
    this.loaded = false;
  }


}

export default new Product ()