import { makeAutoObservable } from "mobx" 
import { MOCK_PRODUCTS_LIST } from "../assets/static"
import { IProduct, IProductCount, IUser } from "../types"

class Product {
  user: IUser = {
    name: "No_user_name",
    email: "some.email@gmail.com",
    password: "some secred password",
    phoneNumber: "38099991123",
    isActive: true,
    buyedProducts:  [],
    cartProducts: [],
  } as IUser


  constructor() {
    makeAutoObservable(this)

    this.user.cartProducts.push(...MOCK_PRODUCTS_LIST.filter(product => product.isAvailable).map(product => {return {...product, count: 1 } as IProductCount}))
  }

  
  addCartProduct (product: IProduct, count: number = 1) {
    const newProduct = {...product, count} as IProductCount

    this.user.cartProducts.push(newProduct)
  }

  updateCartProduct(oldProduct: IProductCount, newProduct: IProductCount) {
    let product = this.user.cartProducts.find(product => JSON.stringify(product) === JSON.stringify(oldProduct)) 
    product = newProduct;
  }

  removeCartProduct (product: IProductCount ) {
    this.user.cartProducts = this.user.cartProducts.filter(product_ => JSON.stringify(product_) !== JSON.stringify(product));
  }

  setCurrentUser (user: IUser) {
    this.user = user;
  }
}

export default new Product ()