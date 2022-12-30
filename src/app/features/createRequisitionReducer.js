import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const dataUrl = `http://localhost:9000/requisition`

const initialState = {
    values: [requisitionId,
        dateOfReq,
        closingDate,
        client,
        role,
        jobType,
        country,
        city,
        state,
        postalCode,
        min,
        max,
        jd,
        resp,
        skills,
        workType,
        elegibleCriteria,
        goodToAdd],
    status: 'idle',
    error: null
}

export const postRequisitionData = createAsyncThunk(
    'jobs/postRequisitionData',
    async(initialState) => {
        try{
            const response = await axios.post(dataUrl,initialState)
            return response.data
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
            state.values = action.payload;
        })
        .addCase(postRequisitionData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
}
})


export default postRequisitionSlice.reducer;