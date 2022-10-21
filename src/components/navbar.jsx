import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

// import use selector
import { useSelector } from "react-redux";

import SettingsIcon from "../assets/settings.svg";
import LogoutIcon from "../assets/logout.svg";
import SettingsIconWhite from "../assets/settings-white.svg";
import LogoutIconWhite from "../assets/logout-white.svg";

const Navbar = ({ icons, openSettings, openLogout }) => {
	const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);

	useEffect(() => {
		window
			.matchMedia("(min-width: 768px)")
			.addEventListener("change", (e) => setMatches(e.matches));
	}, []);
	// useSelector hook to get state of theme selector from redux store
	const theme = useSelector((state) => state.theme.theme);
	return (
		<div className='navbar'>
			{icons ? (
				theme === "dark" ? (
					<div onClick={openSettings} style={{ display: "flex", alignItems: "center" }}>
						<img src={SettingsIconWhite} alt='Settings icon' />
						{matches && <div style={{ marginLeft: 12 }}>Settings</div>}
					</div>
				) : (
					<div onClick={openSettings} style={{ display: "flex", alignItems: "center" }}>
						<img src={SettingsIcon} alt='Settings icon' />
						{matches && <div style={{ marginLeft: 12 }}>Settings</div>}
					</div>
				)
			) : null}

			<div style={{ fontSize: 20, textAlign: "center", margin: "auto" }}>
				Another to-do list app
			</div>
			{icons ? (
				theme === "dark" ? (
					<div onClick={openLogout} style={{ display: "flex", alignItems: "center" }}>
						{matches && <div style={{ marginRight: 12 }}>Logout</div>}
						<img src={LogoutIconWhite} alt='Logout icon' />
					</div>
				) : (
					<div onClick={openLogout} style={{ display: "flex", alignItems: "center" }}>
						{matches && <div style={{ marginRight: 12 }}>Logout</div>}
						<img src={LogoutIcon} alt='Logout icon' />
					</div>
				)
			) : null}
		</div>
	);
};

Navbar.propTypes = {
	icons: PropTypes.bool,
	openLogout: PropTypes.func,
	openSettings: PropTypes.func,
};

export default Navbar;
