import React from "react";
import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<React.Fragment>
			<ListOfUsers />
			<CreateNewUser />
		</React.Fragment>
	);
}

export default App;
