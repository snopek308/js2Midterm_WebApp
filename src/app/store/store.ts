//Redux allows for a programmer to create a function that takes a state and return a state.
//Redux has different tools which make it really easy to code
//Redux is useful when you're building a medium to large single page application 
//with complex views.

import { ReduxStoreActions } from './actions';
import { tassign } from 'tassign';
import { stat } from 'fs';


// determines shape of the store and properties
//This Redux Store state is single javascript that contains
//the state of the application-like a local client side database
//The list is properties of the IAppState (different slices of the application state)
//Different components can work with the same "slice", so when
//a component modifies the "slice," the changes are immediately visible to other components
export interface IAppState {
  cart: any[],
  totalCartQty: number,
  showCart: boolean,
  isAuthenticated: boolean,
  lastUpdated: Date
}

export const InitialState: IAppState = {
  cart: [],
  totalCartQty: 0,
  isAuthenticated: false,
  showCart: false,
  lastUpdated: null
}

//This code controls the State of the application, in regards to what the 
//shopping cart does. The action determines how the state is changed.
//This returns a new State after the switch statement.
//In reducers (function below) you always have two arguments, the return State and then the action
export function rootReducer(state: IAppState, action): IAppState{
  //This switch helps return a new state, this is easy to test
  //
  switch (action.type){
    case ReduxStoreActions.AddToCart:
        console.log(state);
        console.log(action);
        console.log(state.cart.length);
        if(state.cart.length > 0){
          //This was code I had to try and total how many qty were in the cart.
          //This code blew UP my cart. It was like the fibonacci sequence, everything just kept multipling
          //I kept checking the console and could see the code was constantly adding, but never the right way
          //so I commented out and went searching the internet, and reached out for help.
          // state.cart.forEach((item, index) => {
          //   if(item.productID === action.product.productID){
          //     item.cartQty += 1;
          //     state.totalCartQty +=1;
          //   }
          // });  


          //this is how I ended up putting the qty in front of the shopping cart.
          //using the the state's cart, we find the parameter x, x being the ProductID,
          //and it must match the action product.productID from above
          let product = state.cart.find((x) => x.productID == action.product.productID);

          //these if statements controls the cartQty and the state of the totalCartQty
          //these reducers returns the new state, and internally updates the state
          //the store will internally update the state across the app
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

      //here are more of the switch statements
      //you see the function UpdateCart, ShowCart, ClearCart,
      //it returns the new state
      //the return of the tassign is a simple wrapper, subset-typed, non-mutating object.assign
      //aka returning the new state
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
      case ReduxStoreActions.Authenticated:
      console.log(state);
      return tassign(state, {
        isAuthenticated: action.body.isAuthenticated,
        lastUpdated: new Date()
      });
  }

  return state;
}
