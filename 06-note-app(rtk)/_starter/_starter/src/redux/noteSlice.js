import { createSlice } from '@reduxjs/toolkit';

// Slice == Action + Reducer
// NoteSlice = NiteAction + NoteReducer

const initialState = {
    notes: [],
};

const noteSlice = createSlice({
    // ชื่อ Slice
    name: 'n3', // type : n3/addMote, type: n3/deleteNote
    initialState: initialState,
    reducers: {
        addNote: (state, action) => {
            const newNotes = [...state.notes, action.payload];
            return { notes: newNotes };
        }
    },
});

// AutoGenerate ActionCreator ==> noteSlice.actions
export const { addNote } = noteSlice.actions;
// dispatch(addNote(note))

// AutoGenerate NoteReducer ให้ด้วย
const noteReducer = noteSlice.reducer
export default noteReducer;