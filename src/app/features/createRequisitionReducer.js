import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const dataUrl = `http://localhost:9000/requisition`

const initialState = {
    posts:[],
    status: 'idle',
    error: null
}

export const postRequisitionData = createAsyncThunk(
    'jobs/postRequisitionData',
    async(value) => {
        try{
            const response = await axios.post(dataUrl,{value})
            return [...response.data]   
        }catch(err) {
            return err.message
        }
    }
)


const postRequisitionSlice = createSlice({
    name : 'postRequisition',
    initialState : initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postRequisitionData.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(postRequisitionData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        })
        .addCase(postRequisitionData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
}
})


export default postRequisitionSlice.reducer;