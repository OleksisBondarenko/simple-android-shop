import { IProduct } from "../types";

export const DEFAULT_USER_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

export const MOCK_PRODUCTS_LIST: IProduct [] = [
  {
    name: "Кабель Baseus Cafule Cable USB For Micro 2.4 A 1 м Червоний + Чорний (CAMKLF-B91)",
    imageURL: "https://content2.rozetka.com.ua/goods/images/big/197881191.jpg",
    description: "Тестовий опис, lorem ipsum doler sit amet. ",
    reviews:  [
      {
        userName: "Павло Буйний",
        text: "Кабель тримається добре. Заряджає також класно. Якісні матеріали.",
        score: 3.8,
        date: "12 April 2022"
      },
      {
        userName: "Павло Буйний",
        text: "Кабель тримається добре. Заряджає також класно. Якісні матеріали.",
        score: 3.9,
        date: "12 April 2022"
      },
      
    ],
    price: 179,
    actualPrice: 170,
    isAvailable: true 
  },
  {
    name: "Відеокарта Nvidia RTX 4050 ",
    imageURL: "https://content2.rozetka.com.ua/goods/images/big/307337507.jpg",
    description: "Тестовий опис, lorem ipsum doler sit amet. ",
    reviews:  [
    ],
    price: 179,
    actualPrice: null,
    isAvailable: true
  },
  {
    name: "Відеокарта 2",
    imageURL: "https://content2.rozetka.com.ua/goods/images/big/307337507.jpg",
    description: "Тестовий опис, lorem ipsum doler sit amet. ",
    reviews:  [
      {
        userName: "Павло Буйний2",
        text: "Кабель тримається добре. Заряджає також класно. Якісні матеріали.",
        score: 2.5,
        date: "12 April 2022"
      }
    ],
    price: 179,
    actualPrice: null,
    isAvailable: true
  },
  {
    name: "ТЕСТОВА НАЗВА",
    imageURL: "https://content2.rozetka.com.ua/goods/images/big/307337507.jpg",
    description: "Тестовий опис, lorem ipsum doler sit amet. ",
    reviews:  [
      {
        userName: "Павло Буйний3",
        text: "Кабель тримається добре. Заряджає також класно. Якісні матеріали.",
        score: 3.5,
        date: "12 April 2022"
      }
    ],
    price: 179,
    actualPrice: null,
    isAvailable: false
  },
  
]