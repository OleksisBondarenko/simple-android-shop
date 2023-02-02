import { makeAutoObservable } from "mobx" 
import { MOCK_PRODUCTS_LIST } from "../assets/static"
import { IProduct, IProductCount, IUser } from "../types"
import { DEFAULT_USER_IMAGE } from "../assets/static"

class Product {
  newImageURI: string = DEFAULT_USER_IMAGE
  user: IUser = {
    name: "No_user_name",
    email: "No_email",
    password: "",
    phoneNumber: "38099991123",
    activatedDate: "21 January 2023",
    isActive: false,
    buyedProducts:  [],
    cartProducts: [],
    imageURI: DEFAULT_USER_IMAGE 
  } as IUser


  constructor() {
    makeAutoObservable(this)

    // this.user.cartProducts.push(...MOCK_PRODUCTS_LIST.filter(product => product.isAvailable).map(product => {return {...product, count: 1, key: Symbol(product.name) } as IProductCount}))
  }

  updateNewImage(uri: string ) {
    this.newImageURI = uri;
  }

  updateUser(newUser: IUser) {
    this.setCurrentUser(newUser);
  }

  
  addCartProduct (product: IProduct, count: number = 1) {
    const key = Symbol(product.name)
    const newProduct = {...product, count, key} as IProductCount
    
    this.user.cartProducts.push(newProduct)
  }

  updateCartProduct(oldProduct: IProductCount, newProduct: IProductCount) {
    // let product = this.user.cartProducts.find(product => JSON.stringify(product) === JSON.stringify(oldProduct))
    
    let product = this.user.cartProducts.find(product => product.key === oldProduct.key) 
    product = newProduct;
  }

  removeCartProduct (product: IProductCount ) {
    // this.user.cartProducts = this.user.cartProducts.filter(product_ => JSON.stringify(product_) !== JSON.stringify(product));
    
    this.user.cartProducts = this.user.cartProducts.filter(product_ => product_.key !== product.key);
  }

  setCurrentUser (user: IUser) {
    this.user = user;
    console.log(user);
    
    let newUser = {...this.user}
    newUser.buyedProducts = [];
    newUser.cartProducts = [];
    for (let key in user) {
      if (this.user[key]) newUser[key] = user[key]
    }

    this.user = newUser;
  }
}

export default new Product ()