import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAll } from '../../services/cards'

export const fetchCards = createAsyncThunk('cards/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const data = await getAll()
        return data
    } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || error.message || 'Failed to fetch cards',
        )
    }
})

const initialState = {
    cards: [],
    loading: false,
    error: null,
    count: 0,
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        clearMessages(state) {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.loading = false
                state.cards = action.payload.data || []
                state.count = action.payload.count || 0
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})

export const { clearMessages } = cardsSlice.actions
export default cardsSlice.reducer
