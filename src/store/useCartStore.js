import { create } from "zustand"; 

export const useCartStore = create((set, get) => ({
  quantity: 1,
  cartQuantity: 0,
 

  getCart: ()=> set(()=> ({ cartQuantity: parseInt(localStorage.getItem("cartQuantity")) || 0 })),
  addToCart: () => {
    const quantity = get().quantity;
    set((state) => ({ cartQuantity: quantity + state.cartQuantity, quantity: 1 }));
  },
  addCartQuantity: (quantity) => set((state) => ({ cartQuantity: state.cartQuantity + quantity })),
  removeCartQuantity: (quantity) => set((state) => ({ cartQuantity: state.cartQuantity - quantity })),
  setCart: (quantity) => set(()=>({cartQuantity: quantity})),

  addQuantity: (quantity) => set((state) => ({ quantity: state.quantity + quantity })),
  removeQuantity: (quantity) => set((state) => ({ quantity: state.quantity - quantity })),
  setQuantity: (quantity) => set({ quantity: quantity }),
}));