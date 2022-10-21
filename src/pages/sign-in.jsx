import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/navbar";
import Button from "../components/button";
import Input from "../components/input";

const SignIn = () => {
	const [inputName, setInputName] = useState("Matt");
	const [inputPassword, setInputPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState();

	const theme = useSelector((state) => state.theme.theme);
	const password = useSelector((state) => state.name.password);
	const dispatch = useDispatch();

	const formSubmit = () => {
		console.log("Attempting to submit form");
		console.log(`${inputPassword} is the entered password, ${password} is `);
		if (inputName.length < 4) {
			setErrorMessage("Sorry, your name is too short. Please try again with a longer name.");
		} else if (password === "") {
			dispatch({ type: "name/setPassword", payload: inputPassword });
			dispatch({ type: "name/setName", payload: inputName });
		}
		if (inputPassword !== password) {
			setErrorMessage("Incorrect password.");
		} else {
			dispatch({ type: "name/setName", payload: inputName });
		}
	};

	return (
		<div className={theme}>
			<Navbar />
			<div style={{ display: "flex", height: "100%", paddingTop: 24, width: "100%" }}>
				<div style={{ padding: 16, width: "100%" }}>
					<div style={{ fontSize: 24, marginBottom: 16 }}>Sign In</div>
					<div style={{ fontSize: 20, marginBottom: 16 }}>Name</div>
					<Input
						placeholder={"John Doe"}
						value={inputName}
						onChange={(e) => {
							setInputName(e.target.value);
						}}
					/>
					<div style={{ fontSize: 20, marginBottom: 16 }}>Password</div>
					<Input
						placeholder={"*******"}
						value={inputPassword}
						onChange={(e) => {
							setInputPassword(e.target.value);
						}}
						password
					/>
					<Button
						onClick={() => {
							formSubmit();
						}}
					>
						Submit
					</Button>
					<div style={{ fontSize: 20, marginTop: 16, textAlign: "center" }}>
						{errorMessage}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
