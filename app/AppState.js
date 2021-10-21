import {
  Shirt
} from "./Models/Shirt.js"
import {
  EventEmitter
} from "./Utils/EventEmitter.js"
import {
  isValidProp
} from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  shirts = [
    // TODO generate id
    new Shirt({
      id: 34968273459345,
      shirtName: 'Carhartt',
      shirtImg: 'https://imgcdn.carhartt.com/is/image/Carhartt/103296_001?fit=constrain,1&wid=798&hei=800&fmt=jpg',
      size: 'Small',
      color: 'red',
      price: 10,
      quantity: 100
    }),
    new Shirt({
      id: 2485734565467,
      shirtName: 'Hanes',
      shirtImg: 'https://cdn.shopify.com/s/files/1/0220/4008/4552/products/Color_3pack_1024x1024.jpg?v=1598302156',
      size: 'medium',
      color: 'red',
      price: 5,
      quantity: 10

    }),
    new Shirt({
      id: 342582455734566,
      shirtName: 'Rags',
      shirtImg: 'https://imgcdn.carhartt.com/is/image/Carhartt/103296_001?fit=constrain,1&wid=798&hei=800&fmt=jpg',
      size: 'Large',
      color: 'black',
      price: 1,
      quantity: 10

    })


  ]

  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})