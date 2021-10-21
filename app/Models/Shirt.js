import {
  generateId
} from "../Utils/generateId.js";
import {
  ProxyState
} from "../AppState.js";

export class Shirt {
  constructor(data) {
    this.id = data.id || generateId()
    this.shirtName = data.shirtName
    this.shirtImg = data.shirtImg
    this.size = data.size
    this.color = data.color
    this.price = data.price
    this.quantity = data.quantity
  }

  get CardTemplate() {
    // TODO create template
    return `
    <div class="card m-1" style="width: 18rem;">
    <img class="card-img-top" src="${this.shirtImg}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.shirtName}</h5>
      <p class="card-text">${this.size}, ${this.quantity} in stock</p>
      <p class="card-text"><b>$${this.price}</b></p>
      <button onclick="app.shirtsController.addCart('${this.id}')" class="btn btn-primary">Add to cart: </button>
    </div>
  </div>

    `
  }

  // getPrice() {

  //   carts.forEach(c => {



  //   });
  // }
}