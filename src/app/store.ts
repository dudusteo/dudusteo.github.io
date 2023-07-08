import { configureStore } from "@reduxjs/toolkit";
import buildReducer from "../features/build/build-slice";

export const store = configureStore({
	reducer: {
		build: buildReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
