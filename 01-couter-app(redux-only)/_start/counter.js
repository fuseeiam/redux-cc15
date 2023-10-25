const { createStore } = require('redux');

// Redux
// - State
const initialState = {
    count: 0,
};

// - Action : JS Object ที่เก็บข้อมูล Action ต่างๆ (Convention INCREMENT_BY)
const increment = {
    type: 'INCREMNET',
};

const decrement = {
    type: 'DECREMENT',
};

const reset = {
    type: 'RESET',
};

const incrementByFive = {
    type: 'INCREMENT_BY_FIVE',
    payload: 5,
};

// - Reducer : Logic based on ActionType เป็น functionc ปัจจุบัน ที่รับค่ามาจาก state ของ store แล้วมาจัดดการ update ส่งให้ store
// Input : state , action
// Return : newState(Do not modify)

const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        // state.count += 1 (Do not modify) ห้ามทำ
        return { count: state.count + 1 };
    } else if (action.type === 'DECREMENT') {
        return { count: state.count - 1 };
    } else if (action.type === 'RESET') {
        return { count: 0 };
    } else if (action.type === 'INCREMENT_BY_FIVE') {
        return { count: state.count + action.payload };
    }
    return state;
};

// - Store
const store = createStore(counterReducer);

// getState : ดูข้อมูล State ปัจจุบัน
// console.log(store.getState());

// subscribe : ติดตามข้อมูล ที่ setState เหมือน Message ที่ส่งเข้ามือถือเวลาทำธุรกรรม
store.subscribe(() => {
    const state = store.getState();
    console.log('current state', state);
});

// dispatch => syntax : dispatch(action)
store.dispatch(increment)
// console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());


store.dispatch(decrement);
store.dispatch(incrementByFive);

// store.dispatch(decrement);
// store.dispatch(decrement);
// store.dispatch(decrement);
// console.log(store.getState());

store.dispatch(reset);
// console.log(store.getState());

