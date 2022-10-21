import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Button from "../components/button";
import Select from "../components/toggle";
import Input from "../components/input";

const SettingsModal = () => {
	const theme = useSelector((state) => state.theme.theme);
	const name = useSelector((state) => state.name.name);
	const [inputName, setInputName] = useState(name);
	const dispatch = useDispatch();
	const oppositeTheme = theme === "light" ? "dark" : "light";

	const setName = () => {
		if (inputName.length < 4) {
			alert("Name too short. Please choose a name with 4 or more characters");
		} else {
			dispatch({ type: "name/setName", payload: inputName });
			alert("Changed!");
		}
	};
	return (
		<div
			style={{
				padding: 16,
				backgroundColor: theme === "light" ? "white" : "black",
				width: "100%",
			}}
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<div style={{ fontSize: 24 }}>Settings</div>
			<div style={{ marginTop: 16, marginBottom: 12, fontSize: 20 }}>Switch theme:</div>
			<Select
				options={["Light", "Dark"]}
				value={theme}
				onChange={() => {
					dispatch({ type: "theme/toggleTheme", payload: oppositeTheme });
				}}
			/>
			<div style={{ marginTop: 16, marginBottom: 12, fontSize: 20 }}>Change name:</div>
			<Input
				value={inputName}
				onChange={(e) => {
					setInputName(e.target.value);
				}}
			/>
			<Button
				onClick={() => {
					setName();
				}}
			>
				Change name
			</Button>

			<div style={{ marginTop: 16, marginBottom: 12, fontSize: 20 }}>Sign out:</div>
			<Button
				onClick={() => {
					dispatch({ type: "name/signOut", theme: oppositeTheme });
				}}
			>
				Sign out
			</Button>
		</div>
	);
};

export default SettingsModal;
