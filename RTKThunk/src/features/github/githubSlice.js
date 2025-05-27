import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (thunkAPI) =>
    {
        const response = await fetch('https://api.github.com/users/Vishal987472');
        if (!response.ok) {
            return thunkAPI.rejectWithValue('Failed to fetch user');
        }
        const data = await response.json();
        return data;
    }
);
const initialState = {
    user: null,
    loading: false,
    error: null
};
const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        {
            builder
            .addCase(fetchUser.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addCase(fetchUser.fulfilled, (state, action) =>
                {
                    state.user = action.payload;
                    state.loading = false;
                    state.error = null;
                }
            )
            .addCase(fetchUser.rejected, (state, action) =>
                {
                    state.loading = false;
                    state.error = action.payload || 'Failed to fetch user';
                }
            );
        }
});

export default githubSlice.reducer;
