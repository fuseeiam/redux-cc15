import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, FETCH_NOTE } from './actionType';

// action Creator
export const addNoteAction = (note) => {
    return {
        type: ADD_NOTE,
        payload: note,
    };
};

export const deleteNoteAction = (nodeId) => {
    return {
        type: DELETE_NOTE,
        payload: nodeId,
    }
}

export const fetchNoteAction = () => {
    return {
        type: FETCH_NOTE,
    }
}