import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/Counters/CounterSlice.js';
// import {todosReducer} from '../features/Todos/TodosSlice.js';
// import postsReducer from '../features/Posts/PostsSlice.js';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        // todos: todosReducer,
        // posts: postsReducer 
    }
});

export default store;