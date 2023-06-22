import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers : {
        addSong(state, action){
            state.push(action.payload);
        },
        removeSong(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
});

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers : {
        addMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset(state, action){
            return [];
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

/* console.log(store);
console.log(JSON.stringify(store.getState()));

store.dispatch({
    type:'song/addSong',
    payload: 'New Song!!'
});

console.log(JSON.stringify(store.getState()));

store.dispatch(songsSlice.actions.addSong('Some song!'));

console.log(JSON.stringify(store.getState())); */

export {store};
export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie, reset} = moviesSlice.actions;



