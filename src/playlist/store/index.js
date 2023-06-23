import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

const store = configureStore({
    reducer: {
        songs: moviesReducer,
        movies: songsReducer
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

export {store, reset, addSong, removeSong, addMovie, removeMovie};



