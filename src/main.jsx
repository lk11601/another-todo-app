import React from "react";
import ReactDOM from "react-dom/client";

import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import SignIn from "./pages/sign-in";

import "./index.css";

import { store, persistor } from "./store";

const Home = () => {
	// store.dispatch({ type: "name/setName", payload: "Cretin" });
	const name = useSelector((state) => state.name.name);
	console.log(store.getState());
	console.log(name);
	if (name) {
		return <Navigate to={"/dashboard"} />;
	} else {
		return <Navigate to={"/signin"} />;
	}
};

const DashNav = () => {
	const name = useSelector((state) => state.name.name);
	if (!name) {
		return <Navigate to={"/signin"} replace={true} />;
	} else {
		return <Dashboard />;
	}
};

const AuthNav = () => {
	const name = useSelector((state) => state.name.name);
	if (name) {
		return <Navigate to={"/dashboard"} replace={true} />;
	} else {
		return <SignIn />;
	}
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/signin",
		element: <AuthNav />,
	},
	{
		path: "/dashboard",
		element: <DashNav />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
