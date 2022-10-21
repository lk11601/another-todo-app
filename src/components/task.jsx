import React from "react";
import PropTypes from "prop-types";
import CompleteButton from "./complete-button";
import { useSelector, useDispatch } from "react-redux";
import BinIcon from "../assets/bin.svg";
import BinIconWhite from "../assets/bin-white.svg";

const Task = ({ todo, index, filter }) => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme.theme);
	const allFilter = filter === "All";
	const completeFilter = filter === "Complete";
	return (
		<div
			style={{
				alignItems: "center",
				marginBottom: 16,
				display: allFilter
					? "flex"
					: completeFilter
					? todo.completed
						? "flex"
						: "none"
					: todo.completed
					? "none"
					: "flex",
			}}
			key={Math.random()}
		>
			<CompleteButton
				complete={todo.completed}
				onClick={() => {
					dispatch({ type: "todos/toggleCompleted", payload: index });
				}}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginLeft: 16,

					backgroundColor: theme === "dark" ? "rgba(255,255,255,0.15)" : "#EBEBEB",
					borderRadius: 8,
					width: "100%",
				}}
			>
				<div
					style={{ paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 16 }}
				>
					<div style={{ fontSize: 20, marginRight: 16 }}>{todo.task}</div>
				</div>
				<div
					onClick={() => {
						dispatch({ type: "todos/deleteTodo", payload: index });
					}}
					style={{
						display: "flex",
						justifyContent: "center",
						padding: 12,
					}}
				>
					{theme === "light" ? (
						<img src={BinIcon} alt='' />
					) : (
						<img src={BinIconWhite} alt='' />
					)}
				</div>
			</div>
		</div>
	);
};

Task.propTypes = {
	filter: PropTypes.string,
	index: PropTypes.any,
	todo: PropTypes.shape({
		completed: PropTypes.any,
		task: PropTypes.any,
	}),
};

export default Task;
