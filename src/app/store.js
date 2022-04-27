import { configureStore } from '@reduxjs/toolkit';
import { mockApi } from './API/fetchMockApi';
import filter from './slice';

const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,filter,
  }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApi.middleware)
});

export { store };
