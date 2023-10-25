const { createStore } = require('redux');
/*
post = {id:number, title : string}
posts = Array<post> == Array<{id:number, title : string}>
 */

// initialState
const initialState = {
    posts: [],
};

// Action
//  - Action
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';

// - Action Creator
const addPostAction = (post) => {
    return {
        type: ADD_POST,
        payload: post,
    };
};
const deletePostAction = (postId) => {
    return {
        type: DELETE_POST,
        payload: postId,
    };
};

const editPostAction = (id, newTitle) => {
    return {
        type: EDIT_POST,
        payload: { id: id, title: newTitle },
    };
};

// const editPostAction = (updatePost) => {
//     return {
//         type: EDIT_POST,
//         payload: {updatePost},
//     };
// };

// Reducer-FN 2 Parameter
const postsReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        return { posts: [...state.posts, action.payload] };
    } else if (action.type === DELETE_POST) {
        const newPosts = state.posts.filter((post) => post.id !== action.payload);
        return { posts: newPosts };
    } else if (action.type === EDIT_POST) {
        const updatedPosts = state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
        );
        return { posts: updatedPosts };
    }
    return state;
};

// Store
const store = createStore(postsReducer);

store.subscribe(() => {
    const state = store.getState();
    console.log('>>', state);
});

store.dispatch(addPostAction({ id: 1, title: 'HTML' }));
store.dispatch(addPostAction({ id: 2, title: 'CSS' }));
store.dispatch(addPostAction({ id: 3, title: 'REACT' }));
// store.dispatch(deletePostAction(2));
// store.dispatch(deletePostAction(3));
store.dispatch(editPostAction(2, 'Prisma'));
store.dispatch(editPostAction(1, 'Express'));