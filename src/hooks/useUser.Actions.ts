import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { UserId, deleteUserById } from "../store/users/slice";

export const useUserActions = () => {
	const dispatch = useDispatch();
	const removeUser = useCallback(
		(id: UserId) => dispatch(deleteUserById(id)),
		[dispatch],
	);
	return { removeUser };
};
