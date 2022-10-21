import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import SettingsModal from "../modals/settings";
import LogoutModal from "../modals/logout";

import Navbar from "../components/navbar";
import Button from "../components/button";
import Input from "../components/input";
import Task from "../components/task";
import Select from "../components/select";

const Dashboard = () => {
	const [modalShown, setModalShown] = useState(false);
	const [currentModal, setCurrentModal] = useState("settings");
	const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);

	const theme = useSelector((state) => state.theme.theme);

	useEffect(() => {
		window
			.matchMedia("(min-width: 768px)")
			.addEventListener("change", (e) => setMatches(e.matches));
	}, []);

	return (
		<div className={theme}>
			{modalShown && (
				<div
					style={{
						position: "fixed",
						width: "100vw",
						height: "100vh",
						backgroundColor:
							theme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
						padding: 32,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					onClick={() => {
						setModalShown(false);
					}}
				>
					<div style={matches ? { width: "50%" } : { width: "100%" }}>
						{currentModal === "settings" ? <SettingsModal /> : <LogoutModal />}
					</div>
				</div>
			)}
			<Navbar
				icons
				openSettings={() => {
					setCurrentModal("settings");
					setModalShown(true);
				}}
				openLogout={() => {
					setCurrentModal("logout");
					setModalShown(true);
				}}
			/>
			<div
				style={
					matches ? { display: "flex", justifyContent: "stretch" } : { display: "block" }
				}
			>
				<div style={matches ? { width: "50%" } : null}>
					<NewTodo />
				</div>
				{!matches && <hr />}
				<div style={matches ? { width: "50%" } : null}>
					<DisplayTasks />
				</div>
			</div>
		</div>
	);
};

const NewTodo = () => {
	const [newTodo, setNewTodo] = useState("");

	const theme = useSelector((state) => state.theme.theme);
	const dispatch = useDispatch();

	const createNewTodo = () => {
		dispatch({ type: "todos/addTodo", payload: newTodo });
		setNewTodo("");
	};
	return (
		<div style={{ padding: 16, background: theme === "dark" ? "black" : "white" }}>
			<div style={{ fontSize: 24, marginBottom: 16 }}>Create new todo</div>
			<div style={{ fontSize: 20, marginBottom: 16 }}>To-do task</div>
			<Input
				placeholder={"Cook a grilled cheese sandwich"}
				value={newTodo}
				onChange={(e) => {
					setNewTodo(e.target.value);
				}}
			/>
			<Button
				onClick={() => {
					createNewTodo();
				}}
			>
				Create new todo
			</Button>
		</div>
	);
};

const DisplayTasks = () => {
	const [todoFilter, setTodoFilter] = useState("All");

	const todos = useSelector((state) => state.todos.todos);
	const theme = useSelector((state) => state.theme.theme);
	return (
		<div style={{ padding: 16, background: theme === "dark" ? "black" : "white" }}>
			<div style={{ fontSize: 24, marginBottom: 16 }}>Your todos</div>
			<Select
				options={["All", "Complete", "Incomplete"]}
				setValue={(e) => {
					setTodoFilter(e.target.value);
				}}
				value={todoFilter}
			/>
			{todos.map((todo, index) => {
				return <Task todo={todo} index={index} key={Math.random()} filter={todoFilter} />;
			})}
		</div>
	);
};

export default Dashboard;
