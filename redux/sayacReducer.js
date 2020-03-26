import * as actionTypes from "./actionTypes";
const sayacReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SAYI_ART:
      return state + action.payload > 10 ? 0 : state + action.payload;
    case actionTypes.SAYI_AZALT:
      return state - action.payload < -10 ? 0 : state - action.payload;
    default:
      return state;
  }
};
export default sayacReducer;
