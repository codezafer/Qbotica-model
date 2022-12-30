import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const dataUrl = `http://localhost:9000/requisition`


const initialState = {
    values: [],
    status: 'idle',
    error: null
}

export const getRequisitionData = createAsyncThunk(
    'jobs/getRequisitionData',
    async () => {
        try{
            const response = await axios.get(dataUrl)
            return [...response.data]
        } catch(err) {
            return err.message
        }
    }
)



export const deleteRequisitionData = createAsyncThunk(
    'jobs/deleteRequisitionData', 
    async (initialPost) => {
        const {id} =  initialPost
        try{
            const response = await axios.delete(`${dataUrl}/${id}`)
            if(response?.status === 200) return initialPost;
            return `${response?.status}" ${response?.statusText}`;
        }catch(err) {
            return err.message
        }
})




const requisitionSlice = createSlice({
    name: 'requisiton',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getRequisitionData.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getRequisitionData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.values = action.payload;
        })
        .addCase(getRequisitionData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
        .addCase(deleteRequisitionData.fulfilled, (state,action) => {
            if(!action.payload?.id){
                console.log("Delete could not complete")
                console.log(action.payload)
                return;
            }
            const {id} = action.payload;
            const values = state.values.filter((item) => item.id !== id);
            state.values = values;
        })
        
    }

});

export default requisitionSlice.reducer;