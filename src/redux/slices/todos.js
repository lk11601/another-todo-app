import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
	name: "todos",
	initialState: {
		completed: ["Learn React"],
		todos: [
			{
				task: "Learn Redux",
				completed: false,
			},
			{
				task: "Learn React",
				completed: true,
			},
		],
	},
	reducers: {
		addTodo: (state, action) => {
			if (action.payload.length) {
				state.todos.unshift({ task: action.payload, completed: false });
			}
		},
		// create reducer for toggling completed
		toggleCompleted: (state, action) => {
			console.log(state);
			state.todos[action.payload].completed = !state.todos[action.payload].completed;
			if (state.todos[action.payload].completed) {
				const currentTodo = state.todos[action.payload];
				state.todos.splice(action.payload, 1);
				state.todos = [...state.todos, currentTodo];
			}
		},
		// create reducer for deleting a todo
		deleteTodo: (state, action) => {
			state.todos.splice(action.payload, 1);
		},
		// create a reducer for editing a todo task
		editTodo: (state, action) => {
			state.todos[action.payload.index].task = action.payload.task;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = todosSlice.actions;

export default todosSlice.reducer;
