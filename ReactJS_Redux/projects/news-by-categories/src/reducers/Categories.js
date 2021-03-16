const ADD_CATEGORY = 'category/add'
const SELECT_CATEGORY = 'category/select'

/* ---> payload scheme
* id
* name
*/

export const addCategory = payload => ({
    type: ADD_CATEGORY,
    payload: {
        ...payload,
        id: Math.random().toString(36),
    }
})

export const selectCategory = payload => ({
    type: SELECT_CATEGORY,
    payload,
})

const initialState = {
    data: [{ id: 1, name: 'Default'}],
    selected: 1,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
           return {
               ...state,
               data: [...state.data, action.payload]
           } 
        case SELECT_CATEGORY: 
           return {
               ...state,
               selected: action.payload,
           }
        default:
            return state
    }
}