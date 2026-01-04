import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartQuantity: 0,
  item: [
    {
      id: 0,
      name: "Bitaxe Gamma 601",
      image: '/1.jpg',
      price: 25750,
    },
    {
      id: 1,
      image: '/NERDQAXE/4.png',
      name: "NerdQAxe",
      price: 25750,
    },
    { 
      id: 2, 
      image: '/NERDOCTAXE/1.jpg',

      name: "NerdOctaxe",
      price: 25750,
    },
  ],
  //it is an array of object {item1, item2}
  cart: {
    0: 0,
    1: 0,
    2: 0
  },
  addToCart: async (id, quantity) => {

    const { cart, cartQuantity } = get()
    let modifiedCart = cart;
    modifiedCart[id] += quantity

    set({ cart: modifiedCart })
    let sum = cartQuantity + quantity
    set({ cartQuantity: sum })

    localStorage.setItem("data", JSON.stringify({ sum, modifiedCart }))
  },
  modifyCart: async (id, quantity) => {

    const { cart, cartQuantity } = get()
    let modifiedCart = cart;
    modifiedCart[id] = quantity

    set({ cart: modifiedCart })
    let sum = 0
    for (let i = 0; i < 3; i++) {
      sum += modifiedCart[i]
    }
    console.log(sum);
    set({ cartQuantity: sum })

    localStorage.setItem("data", JSON.stringify({ cartQuantity, modifiedCart }))
  },
  removeToCart: async (id, quantity) => {

    const { cart, cartQuantity } = get()
    let modifiedCart = cart;
    modifiedCart[id] -= quantity

    set({ cart: modifiedCart })
    let sum = cartQuantity - quantity
    set({ cartQuantity: sum })

    localStorage.setItem("data", JSON.stringify({ sum, modifiedCart }))
  },
  getData: async () => {
    let data = JSON.parse(localStorage.getItem("data"))
    set({ cart: data.modifiedCart })
    set({ cartQuantity: data.sum })
  
  },
 
}));