import { DATA_LOADED,INDATA_LOADED } from "./../constants";
const initialState = {
    lists: [],
    art:{}
  };
  
  function rootReducer(state = initialState, action) {
      console.log('action ', action.data)
      console.log('Input-Data ', action.payload)
      switch(action.type){
        // case DATA_LOADED:
        //          return {
        //            ...state,
        //            lists:action.data
        //          };
                 case INDATA_LOADED:
                  return {
                    ...state,
                    art:action.payload
                  };
            default:
                 return state;
      }
  };
  
  export default rootReducer;