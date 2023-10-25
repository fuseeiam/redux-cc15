import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, FETCH_NOTE } from '../actions/actionType';
/*
note: {id:string, title:string, content:string}
*/

const initialState = {
    notes: [],
};


// Reducer == Fn 2 Parameter

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTE:
            const notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
            return { ...state, notes: notes }
        case ADD_NOTE:
            // if f5 note will not disappear
            const newNotes = [...state.notes, action.payload]
            localStorage.setItem('notes', JSON.stringify(newNotes))
            return { ...state, notes: newNotes }
        // return {...state , notes: [...state.notes,action.payload] }
        case DELETE_NOTE:
            const filterNoted = state.notes.filter((n) => n.id !== action.payload)
            localStorage.setItem('notes', JSON.stringify(filterNoted))
            return { ...state, notes: filterNoted }
        // return{...state, notes:state.notes.filter((n)=> n.id !== action.payload)}
        default:
            return state
    }
}

export default noteReducer

