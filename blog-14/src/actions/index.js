import jsonPlaceholder from "../apis/jsonPlaceholder"


// ----------Building Action-Creators---------------
//Action creators are exactly that—functions that create actions
// components will call this action creators if needed


//-- we need to keep the actions(dispatch of fetchPost) as plain objects not any type of functions that is why we have build the async function as a return function insu=ide the fetchPost action-creator
export const fetchPosts= ()=>{
    return async (dispatch)=>{
        const response=await jsonPlaceholder.get('/posts')

        dispatch({  //----ACTION--------------//
            type:'FETCH_POSTS',
            payload: response.data
        })
    } 
}

export const fetchUser= (id)=>{   //----id is the id of the user we want to fetch
    return async (dispatch)=>{
        const response=await jsonPlaceholder.get(`/users/${id}`)

        dispatch({
            type:'FETCH_USER',
            payload: response.data
        })
    } 
}