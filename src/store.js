import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import themeSliceReducer from "./redux/slices/theme";
import nameSliceReducer from "./redux/slices/name";
import todosSliceReducer from "./redux/slices/todos";

const persistConfig = {
	key: "root",
	storage,
};

const baseReducer = combineReducers({
	theme: themeSliceReducer,
	name: nameSliceReducer,
	todos: todosSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, baseReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export const persistor = persistStore(store);
