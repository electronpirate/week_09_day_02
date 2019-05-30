const customersReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_DATA':
    console.log(action.data);
    return [...state, ...action.data]
    default:
    return state
}
}


export default customersReducer;
