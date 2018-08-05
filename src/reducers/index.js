

export default (state, action) => {
  // console.log(action.);
  switch(action.type){
case "WITHDRAW_MONEY": 
return {
  ...state,
  totalAmount: state.totalAmount - action.totalAmount.amount
  
};
default: return state;
  }
  
}