import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    error: null,
    prev: null,
    next: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, {rejectedWithValue, dispatch, getState}) => {
        try {
            const {data} = await moviesService.getMovies(page);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.error = null;
                state.movies = action.payload.results;
                state.prev = action.payload.page;
                state.next = action.payload.page;
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.error = action.payload;
                } else {
                    state.error = null;
                }
            });
    }
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getMovies
};

export {
    movieReducer,
    movieActions
};