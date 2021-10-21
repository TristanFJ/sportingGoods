import {
  ProxyState
} from "../AppState.js";

import {
  Shirt
} from "../Models/Shirt.js";

class ShirtsService {
  addProduct() {
    ProxyState.shirts = [...ProxyState.shirts, new Shirt({

    })]
  }

  addCart(id) {

    const item = ProxyState.shirts.find(s => s.id == id)
    const cart = ProxyState.cart

    if (item.quantity > 0) {
      cart.push(item)
      item.quantity--
      console.log(item.quantity)
      console.log('add to cart', cart)

    } else {
      alert("out of stock")
    }


    // item.push(item)
  }
  buyStuff() {
    let cart = ProxyState.cart
    cart.length = 0

    console.log(cart)
  }

}

export const shirtsService = new ShirtsService();