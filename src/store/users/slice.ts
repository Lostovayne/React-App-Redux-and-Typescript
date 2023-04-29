import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_USER = [
	{
		id: "1",
		name: "Epsaind",
		email: "epsaind@gmail.com",
		github: "LostoVayne",
	},
	{
		id: "2",
		name: "Gabriela",
		email: "GabiSh19@gmail.com",
		github: "GabiSh19",
	},
	{
		id: "3",
		name: "	Nahuel Vera",
		email: "NahuelFV@gmail.com",
		github: "NahuelFV",
	},
	{
		id: "4",
		name: "	Casadjes",
		email: "Casadjes@gmail.com",
		github: "Casadjes",
	},
	{
		id: "5",
		name: "	Anny",
		email: "armosque@gmail.com",
		github: "armosque",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedUsers = localStorage.getItem("users");
	return persistedUsers ? JSON.parse(persistedUsers) : DEFAULT_USER;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = (state.length + 1).toString();
			return [...state, { id, ...action.payload }];
		},

		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById, addNewUser } = usersSlice.actions;
