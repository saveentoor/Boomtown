//Actions
//update new item
const UPDATE_ITEM = "UPDATE_ITEM";
const RESET_IMAGE = "RESET_IMAGE";
const RESET_ITEM = "RESET_ITEM"; 


//Action creators 
//whenever this is passed, you have to pass an item 
export const updateItem = item  =>({
    type: UPDATE_ITEM,
    payload: item
});

export const resetImage = item  =>({
    type: RESET_IMAGE
});

export const resetItem = item  =>({
    type: RESET_ITEM
});

const initialState = {
    title: 'Name your item title',
    description: 'describe your item description',
    imageurl: 'https://via.placeholder.com/350x250.png?text=select+an+image',
    tags: [],
    itemowner: {},
    created: new Date()

};

//Reducer
export default (state = initialState,action) =>{
    switch(action.type) {
        case UPDATE_ITEM : {
            return {
                ...state,
                ...action.payload
            }
        }
        case RESET_ITEM : {
            return {
                ...initialState
            }
        }
        case RESET_IMAGE: 
            return {
                ...state,
                imageurl:initialState.imageurl //change the image
            };
        
        default:
        return state;
    }
};