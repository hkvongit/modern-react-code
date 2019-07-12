export default(state=[], action)=>{
    if(action.type==="FETCH_POSTS"){
        return action.payload;
    }
    return state; // we need to return previous state inorder to avoid the "undefined" state status
}