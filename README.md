# createAsyncThunk
Menerima 2 argumen:
1. namaSlice/namaAction
2. action creator, return-nya akan menjadi action.payload yg akan dipakai di extraReducers

Example of kode:
```
// userSlice.ts

const updateUsiaAsync = createAsyncThunk(
  'user/updateUsia',
  async (usia: Number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { usia, createdAt: new Date().toISOString() };
  }
);
```

extraReducers is connected with createAsyncThunk

Example of kode:
```
// userSlice.ts

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: /////,
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

export {updateUsiaAsync};
```

# configureStore
```
// store.ts

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // ...another slice reduce
  },
});

export default store;
```
