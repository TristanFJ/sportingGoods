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



export class ShirtsController {
  constructor() {
    console.log("ShirtsController Test");
    _draw()
    ProxyState.on('shirts', _draw)
  }

  createShirt() {


    console.log('createShirt successful')
  }

}