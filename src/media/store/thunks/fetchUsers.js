import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async ()=>{
    const response = await axios.get('http://localhost:3001/users');
    pause(100);
    return response.data;
});

const pause = (duration)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, duration);
    });
}

export {fetchUsers};