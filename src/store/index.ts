import { Middleware, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

const persistenceLocalStorageMiddelware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("users", JSON.stringify(store.getState().users));
	};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistenceLocalStorageMiddelware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
