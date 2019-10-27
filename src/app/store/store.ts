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
          // state.cart.forEach((item, index) => {
          //   if(item.productID === action.product.productID){
          //     item.cartQty += 1;
          //     state.totalCartQty +=1;
          //   }
          // });  
          let product = state.cart.find((x) => x.productID == action.product.productID);

          if (product){
            product.cartQty += 1;
            state.totalCartQty +=1;
          }else{
            state.totalCartQty +=1;
          action.product.cartQty = 1;
          state.cart.push(action.product);
          }
        } else {
          //push
          state.totalCartQty +=1;
          action.product.cartQty = 1;
          state.cart.push(action.product);
        }

      
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
      case ReduxStoreActions.ClearCart:
      console.log(state);
      return tassign(state, {
        cart: [],
        totalCartQty: 0,
        lastUpdated: new Date()
      });
  }

  return state;
}
