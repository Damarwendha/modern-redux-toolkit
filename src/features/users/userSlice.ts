import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  nama: string;
  usia: number;
  createdAt: string;
  isLoading: boolean;
}

const initialState: UserState = {
  nama: '',
  usia: 0,
  createdAt: '',
  isLoading: false,
};

// Menerima 2 argumen:
// 1. namaSlice/namaAction
// 2. action creator
// !! variabel ini yang akan di export,, bukan extra reducers
const updateUsiaAsync = createAsyncThunk(
  'user/updateUsia',
  async (usia: Number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // return akan menjadi action.payload di extra reducers
    return { usia, createdAt: new Date().toISOString() };
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateNama(state, action: PayloadAction<string>) {
      state.nama = action.payload;
    },
    updateCreatedAt(state, action) {
      state.createdAt = action.payload;
    },
  },
  // hiraukan builder... addCase() menerima 3 lifecycle dari variabel createAsyncThunk.
  // addCase arg1 berisi nama variabel createAsyncThunk+lifecyclenya, arg2 berisi normal logic sama seperti reducers
  extraReducers: (builder) => {
    builder
      .addCase(updateUsiaAsync.pending, () => console.log('loading'))
      .addCase(updateUsiaAsync.fulfilled, (state, action) => {
        state.usia = action.payload.usia;
        state.createdAt = action.payload.createdAt;
      })
      .addCase(updateUsiaAsync.rejected, () => console.log('error'));
  },
});

// Exporting actions, thunks, and reducer
export const { updateNama, updateCreatedAt } = userSlice.actions; // Normal Logic
export { updateUsiaAsync }; // Sideeffect Logic
export default userSlice.reducer;
