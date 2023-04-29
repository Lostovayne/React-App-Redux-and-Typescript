import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { User, UserId, addNewUser, deleteUserById } from "../store/users/slice";

export const useUserActions = () => {
	const dispatch = useDispatch();

	const addUser = useCallback(
		({ name, email, github }: User) => {
			dispatch(addNewUser({ name, email, github }));
		},
		[dispatch],
	);

	const removeUser = useCallback(
		(id: UserId) => dispatch(deleteUserById(id)),
		[dispatch],
	);
	return { addUser, removeUser };
};
