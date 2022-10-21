import React from "react";
import Button from "../components/button";
import { useDispatch, useSelector } from "react-redux";

const LogoutModal = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme.theme);
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
			<div style={{ marginBottom: 10, fontSize: 24, textAlign: "center" }}>Log out</div>
			<div style={{ marginBottom: 16, fontSize: 20, textAlign: "center" }}>
				Are you sure you want to log out?
			</div>
			<Button
				onClick={() => {
					dispatch({ type: "name/signOut" });
				}}
			>
				Sign out now
			</Button>
		</div>
	);
};

export default LogoutModal;
