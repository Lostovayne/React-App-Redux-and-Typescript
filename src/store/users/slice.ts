import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById } = usersSlice.actions;
