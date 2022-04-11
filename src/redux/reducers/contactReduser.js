

const initialState = [
    {id:0,name:"Adithan",email:"adi@gmail.com",number:9751703071,dob:"1997-08-07",doj:"2020-11-11"},
    {id:1,name:"Baskar",email:"basker@gmail.com",number:9626718541,dob:"1995-07-11",doj:"2021-07-03"},
];


export const ContactReducer = (state = initialState , action) => {
switch (action.type) {
  case "ADD_CONTACT":
    state = [...state, action.payload];
    return state;
  
  case "EDIT_CONTACT":
   const updateList = state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
   state = updateList;
    return state;
    
    
  case "DELETE_CONTACT":
   const deleteList = state.filter((contact) => contact.id !== action.payload );
   state = deleteList;
    return state;
    
  // case "SEARCH_CONTACT":
  //   if(action.payload !== ""){
  //     const searchList =  state.filter((contact) =>Object.values(contact).join(" ").toLowerCase().includes(action.payload.toLowerCase()))
  //     state = searchList;
  //     return state;
  //   }
  //   if(action.payload === ""){
  //     return state
  //   }
   

  default:
    return state;
}
}