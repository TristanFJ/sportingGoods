import {
  ProxyState
} from "../AppState.js"

import {
  shirtsService
} from "../Services/ShirtsService.js"


function _draw() {
  let shirts = ProxyState.shirts;
  let cardsTemplate = ''
  shirts.forEach(s => cardsTemplate += s.CardTemplate)
  // TODO change onclick button
  document.getElementById('app').innerHTML = `<div class="my-3 ">
  <div class="values d-flex flex-wrap my-3">
    ${cardsTemplate}
  </div>
</div>
`
}

function _drawCart() {
  const carts = ProxyState.cart
  let cartTemplate = ''
  carts.forEach(c => cartTemplate += c.shirtName)
  document.getElementById('cart').innerHTML = cartTemplate
}


export class ShirtsController {
  constructor() {
    console.log("ShirtsController Test");
    _draw()
    _drawCart()
    ProxyState.on('shirts', _draw)
    ProxyState.on('cart', _drawCart)

  }

  createShirt() {
    console.log('createShirt successful')
  }

  addCart(id) {

    shirtsService.addCart(id)
    _drawCart()
    _draw()

  }

}