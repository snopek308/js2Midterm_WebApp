import { ReduxStoreActions } from './actions';
import { tassign } from 'tassign';


// determines shape of the store and properties
export interface IAppState {
  cart: any[],
  totalCartQty: number;
  showCart: boolean,
  lastUpdated: Date
}

export const InitialState: IAppState = {
  cart: [],
  totalCartQty: 0,
  showCart: false,
  lastUpdated: null
}


export function rootReducer(state: IAppState, action): IAppState{
  switch (action.type){
    case ReduxStoreActions.AddToCart:
        console.log(state);
        console.log(action);
        console.log(state.cart.length);
        if(state.cart.length > 0){
          state.cart.forEach((item, index) => {
            if(item.productID === action.product.productID){
              item.cartQty += 1;
              state.totalCartQty +=1;
            }
          });  
        } else {
          //push
          state.totalCartQty +=1;
          action.product.cartQty = 1;
          state.cart.push(action.product);
        }
      
      //check cart state = state.cart

      //check if cart length > 0

      // if length <= 0 - push to cart

      //if cart legnth > 0 check for existing product item




      
      return tassign(state, {
        cart: state.cart,
        lastUpdated: new Date()
      });
    case ReduxStoreActions.UpdateCart:
        console.log(state);
      return tassign(state, {

        lastUpdated: new Date()
      });
    case ReduxStoreActions.ShowCart:
      console.log(state);
      return tassign(state, {
        showCart: !state.showCart,
        lastUpdated: new Date()
      });
  }

  return state;
}
