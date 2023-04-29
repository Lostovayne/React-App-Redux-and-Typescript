import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks";

export function CreateNewUser() {
	const { addUser } = useUserActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		addUser({ name, email, github });
	};

	return (
		<Card className="mt-4  max-w-md ">
			<Title>Create New User</Title>
			<form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 ">
				<TextInput placeholder="Name" name="name" />
				<TextInput placeholder="Email" name="email" />
				<TextInput placeholder="User Github" name="github" />
				<div>
					<Button type="submit" color="indigo" className="mt-4">
						Create User
					</Button>
				</div>
			</form>
		</Card>
	);
}
