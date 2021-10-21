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
      id: 34968273459,
      shirtName: 'Carhartt',
      shirtImg: 'https://imgcdn.carhartt.com/is/image/Carhartt/103296_001?fit=constrain,1&wid=798&hei=800&fmt=jpg',
      size: 'Small',
      color: 'red',
      price: 10
    }),
    new Shirt({
      id: 2485734565467,
      shirtName: 'Carhartt',
      shirtImg: 'https://imgcdn.carhartt.com/is/image/Carhartt/103296_001?fit=constrain,1&wid=798&hei=800&fmt=jpg',
      size: 'medium',
      color: 'red',
      price: 10
    }),
    new Shirt({
      id: 342582456,
      shirtName: 'Carhartt',
      shirtImg: 'https://imgcdn.carhartt.com/is/image/Carhartt/103296_001?fit=constrain,1&wid=798&hei=800&fmt=jpg',
      size: 'Large',
      color: 'black',
      price: 10
    })


  ]
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