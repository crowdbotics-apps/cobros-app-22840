import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp21176431Reducer from '../features/SignUp21176431/redux/reducers'
import SignIn22176430Reducer from '../features/SignIn22176430/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp21176431: SignUp21176431Reducer,
SignIn22176430: SignIn22176430Reducer,

});