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
}

export const shirtsService = new ShirtsService();